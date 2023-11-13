import { useEffect } from "react";
import Layout from "./layout/layout";
// import "./Webfonts/style.css"
// import "./Webfonts/fontiran.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  useEffect(() => {
    document.title = "mobino";
  }, []);
  return (
    <div>
      <ToastContainer/>
      <Layout />
    </div>
  );
};

export default App;
