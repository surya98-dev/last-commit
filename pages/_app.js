import "tailwindcss/tailwind.css";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-main">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
