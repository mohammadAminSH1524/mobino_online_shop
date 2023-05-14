import styles from "./notFound.module.css";
import Lottie from "lottie-react";
import _404 from "../../lotties/_404.json";
import { Link } from "react-router-dom";
const NotfoundPage = () => {
  return (
    <div className={styles.container}>
      <div >صفحه ای که دنبالش بودید پیدا نشد !</div>
      <Link to="" className={styles.backToHome}>بریم به صفحه اصلی ؟</Link>
      <div className={styles.animationContainer}>
        <Lottie animationData={_404} />
      </div>
    </div>
  );
};

export default NotfoundPage;
