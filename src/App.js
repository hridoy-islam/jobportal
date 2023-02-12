import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { onAuthStateChanged } from "firebase/auth";
import auth from './firebase/firebase.config'
import { getUser, toggleLoading } from "./features/auth/authSlice";
import { Toaster } from "react-hot-toast";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email))
      }
      else {
        dispatch(toggleLoading())
      }
    })
  }, [])



  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
