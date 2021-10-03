import "tailwindcss/tailwind.css";
import { AuthProvider } from "../context/AuthContext";
import Layout from "../Layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
