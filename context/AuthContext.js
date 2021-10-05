import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage/LoadingPage";
import app from "../firebase";
import api from "../services/api";

const AuthContext = React.createContext();

const auth = getAuth(app);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [warehouseId, setWarehouseId] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      return unsubscribe;
    });
  }, []);
  useEffect(() => {
    if (currentUser) {
      api
        .get(`/user/${currentUser.uid}`, {
          headers: {
            Authorization: "Bearer " + currentUser.accessToken,
          },
        })
        .then((res) => {
          if (res.data.data.warehouseId) {
            setWarehouseId(res.data.data.warehouseId);
          } else {
            router.push("/register-warehouse");
          }
        });
    }
  }, [currentUser]);

  const registerToDB = async (data) => {
    try {
      await api.post("/user", data);
    } catch (err) {
      console.log(err);
    }
  };
  const signup = (fieldData) => {
    createUserWithEmailAndPassword(
      auth,
      fieldData.email,
      fieldData.password,
    ).then(async (data) => {
      await registerToDB({
        id: data.user.uid,
        firstName: fieldData.firstName,
        lastName: fieldData.lastName,
        email: fieldData.email,
        password: fieldData.password,
      });
      return data;
    });
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading,
    setLoading,
    setCurrentUser,
    warehouseId,
  };

  if (loading) return <LoadingPage />;

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
