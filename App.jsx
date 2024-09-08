import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// import AdminTemplate from "./src/template/adminTemplate/AdminTemplate.jsx";
// import UserTemplate from "./src/template/userTemplate/UserTemplate.jsx";
import LoginPage from "./src/pages/LoginPage/LoginPage.jsx";
import useRoutesCustom from "./src/hooks/useRoutesCustom.jsx";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const NotificationContext = React.createContext();
function App() {
  const routes = useRoutesCustom();
  const showNotification = (content, type, duration = 4000) => {
    toast[type](content, {
      position: "top-right",
      zIndex: 999999,
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const [user, setUser] = useState(null);

  const handleLogin = (role) => {
    setUser({ role });
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  return (
    <>
      <NotificationContext.Provider
        value={{
          showNotification,
        }}
      >
        <ToastContainer />
        {routes}
      </NotificationContext.Provider>
      {/* <Carousel /> */}
    </>
  );
}

export default App;
