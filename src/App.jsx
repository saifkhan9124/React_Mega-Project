import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logOut } from "./store/authSlice";
import { Footer, Header } from "./components";

function App() {
  const { loading, setLoading } = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const dispatch = useDispatch;

  return !loading ? (
    <div
      className="min-h-screen flex
  flex-wrap content-between bg-gray-400
  "
    >
      <div className="w-full block">
        <Header />
        <main>{/* outlet */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
