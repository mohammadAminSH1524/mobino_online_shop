import styles from "./navigaition.module.css";

import { CiPercent } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navigation = () => {
  return (
    <>
      <div className={styles.navigationContainer}>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/products"> گوشی موبایل</Link>
            </li>
            <li>
              <Link to="/apple-products"> محصولات اپل </Link>
            </li>
            <li>
              <Link to="/samsung-products"> محصولات سامسونگ</Link>
            </li>
            <li>
              <Link to="/xiaomi-products"> محصولات شیائومی</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.specialSells}>
          <Link to="incredible-offers">
            <span className={styles.specialSellsLogo}>
              <CiPercent />
            </span>
            <span className={styles.specialSellsText}> فروش ویژه</span>
          </Link>
        </div>
      </div>

      <div className={styles.alterdNavigationContainer}>
        <div className={styles.searchBoxContainer}>
          <input
            className={styles.searchInput}
            placeholder="نام کالای مورد نظر را تایپ کنید ..."
            type="text"
            autoComplete="off"
          />
          <button className={styles.searchBtn}>
            <BsSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
