import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
import { BsApple, BsSearch } from "react-icons/bs";
import { FaUser, FaShoppingCart, FaMobileAlt } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { TbLetterS } from "react-icons/tb";
import { SiXiaomi } from "react-icons/si";
import { CiDiscount1 } from "react-icons/ci";
import { FcHome } from "react-icons/fc";
import { persianConverter } from "../functions/functions";
import { useState } from "react";
import Navigation from "../navigation/navigation";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuModal, setMenuModal] = useState(false);
  const { cart } = useSelector((state) => state.sort);
  let path = useLocation().pathname.split("/")[1];

  return (
    <header
      style={path === "auth" ? { display: "none" } : { display: "flex" }}
      className={styles.container}
    >
      <div className={styles.containerControll}>
        <div className={styles.logoAndSearchbarContainer}>
          <Link to="" className={styles.title}>
            mobino
          </Link>
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

        <div className={styles.btnsContainer}>
          <Link to="/auth" className={styles.profileContainer}>
            <p className={styles.profileText}> ورود/ثبت نام</p>
            <span className={styles.profileLogo}>
              <FaUser />
            </span>
          </Link>
          <Link to="/cart" className={styles.cartContainer}>
            <span className={styles.cartLogo}>
              <span className={styles.cartCount}>
                {persianConverter(cart.length)}
              </span>
              <FaShoppingCart />
            </span>
            {/* <p className={styles.cartText}>سبد خرید</p> */}
          </Link>
        </div>
      </div>

      <div className={styles.alterdContainerControll}>
        <div className={styles.menuAndLogo}>
          <button
            onClick={() => setMenuModal(true)}
            className={styles.menuLogo}
          >
            <BiMenu />
          </button>
          <Link to="" className={styles.alterdTitle}>
            موبینو
          </Link>
        </div>
        <div className={styles.btnsContainer}>
          <Link to="/auth" className={styles.profileContainer}>
            <p className={styles.profileText}> ورود/ثبت نام</p>
            <span className={styles.profileLogo}>
              <FaUser />
            </span>
          </Link>
          <Link to="/cart" className={styles.cartContainer}>
            <span className={styles.cartLogo}>
              <span className={styles.cartCount}>
                {persianConverter(cart.length)}
              </span>
              <FaShoppingCart />
            </span>
            {/* <p className={styles.cartText}>سبد خرید</p> */}
          </Link>
        </div>
      </div>

      {/* // ?_________________________________________ */}

      <Navigation />

      {menuModal ? (
        <div className={styles.modalContainer}>
          <div className={styles.menuContainer}>
            <section className={styles.modalBtns}>
              <h4>
                <Link onClick={() => setMenuModal(false)} to="">
                  موبینو
                </Link>
              </h4>
              <button onClick={() => setMenuModal(false)}>
                <AiOutlineClose />
              </button>
            </section>
            <nav className={styles.modalNavigation}>
              <ul>
                <Link onClick={() => setMenuModal(false)} to="/">
                  <span className={styles.modalNavigationLogo}>
                    <FcHome />
                  </span>
                  <span className={styles.modalNavigationText}>صفحه اصلی</span>
                </Link>
                <Link onClick={() => setMenuModal(false)} to="/products">
                  <span className={styles.modalNavigationLogo}>
                    <FaMobileAlt />
                  </span>
                  <span className={styles.modalNavigationText}>
                    گوشی موبایل
                  </span>
                </Link>
                <Link onClick={() => setMenuModal(false)} to="/apple-products">
                  <span className={styles.modalNavigationLogo}>
                    <BsApple />
                  </span>
                  <span className={styles.modalNavigationText}>
                    محصولات اپل
                  </span>
                </Link>
                <Link
                  onClick={() => setMenuModal(false)}
                  to="/samsung-products"
                >
                  <span className={styles.modalNavigationLogo}>
                    <TbLetterS />
                  </span>
                  <span className={styles.modalNavigationText}>
                    محصولات سامسونگ
                  </span>
                </Link>
                <Link onClick={() => setMenuModal(false)} to="/xiaomi-products">
                  <span className={styles.modalNavigationLogo}>
                    <SiXiaomi />
                  </span>
                  <span className={styles.modalNavigationText}>
                    محصولات شیائومی
                  </span>
                </Link>
                <Link
                  onClick={() => setMenuModal(false)}
                  to="incredible-offers"
                >
                  <span className={styles.modalNavigationLogo}>
                    <CiDiscount1 />
                  </span>
                  <span className={styles.modalNavigationText}>فروش ویژه</span>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
