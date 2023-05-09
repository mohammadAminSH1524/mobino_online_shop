import  styles  from "./notFound.module.css";
import Lottie from "lottie-react";
import _404 from "../../lotties/_404.json";

const NotfoundPage = () => {
  return <div className={styles.container}>

    <div className={styles.animationContainer}>
  <Lottie animationData={_404}/>
    </div>

  </div>;
};

export default NotfoundPage;
