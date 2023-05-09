import styles from "./footer.module.css";
import { persianConverter } from "../functions/functions";

import {
  BsPlusLg,
  BsTelegram,
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VscCheckAll } from "react-icons/vsc";

const Footer = () => {
  const [showFullCustomerServices, setFullCustomerServices] = useState(false);
  const [showFullBuyingGuide, setFullBuyingGuide] = useState(false);
  const [showFullAccount, setFullAccount] = useState(false);

  const path = useLocation().pathname.split("/")[1]

  return (
    <footer style={path === "auth" ? {display:"none"} : {width:"100%"}} className={styles.container}>
      <div className={styles.containerControll}>
        <div className={styles.logosContainer}>
          <Link to="" className={styles.logoContainer}>
            <img
              src="https://cdn.kalatik.com/media/0/22/12/23/1671786437911.jpg"
              alt=""
            />
            <span> روند ارسال سفارشات </span>
          </Link>

          <Link to="" className={styles.logoContainer}>
            <img
              src="https://cdn.kalatik.com/media/0/22/12/23/1671786610722.jpg"
              alt=""
            />
            <span> 10 روز ضمانت بازگشت </span>
          </Link>

          <Link to="" className={styles.logoContainer}>
            <img
              src="https://cdn.kalatik.com/media/0/22/12/23/1671786610743.jpg"
              alt=""
            />
            <span> ضمانت اصالت کالا </span>
          </Link>

          <Link to="" className={styles.logoContainer}>
            <img
              src="https://cdn.kalatik.com/media/0/22/12/23/1671786610754.jpg"
              alt=""
            />
            <span> تضمین بهترین قیمت </span>
          </Link>
        </div>

        {/*  screen > 1000px */}
        <div className={styles.footerLinesContainer}>
          {/*  */}
          <div className={styles.footerLines}>
            <div className={styles.footerLine}>
              <span className={styles.footerLineTitle}>خدمات مشتریان</span>
              <ul>
                <li>تماس با موبینو</li>
                <li>درباره فروشگاه موبینو</li>
                <li>قوانین و مقررات فروشگاه</li>
              </ul>
            </div>
            {/*  */}
            <div className={styles.footerLine}>
              <span className={styles.footerLineTitle}>راهنما خرید سایت</span>
              <ul>
                <li>شرایط عودت کالا چیست ؟</li>
                <li>چگونه کالا ارسال میشود ؟</li>
                <li>چگونه هزینه پرداخت کنم ؟</li>
                <li>چگونه سفارش بدم ؟</li>
              </ul>
            </div>
            {/*  */}
            <div className={styles.footerLine}>
              <span className={styles.footerLineTitle}>حساب کاربری</span>
              <ul>
                <li>حساب کاربری</li>
                <li>پیگیری سفارش</li>
              </ul>
            </div>
          </div>

          {/*  */}
          <div className={styles.beWithUsContainer}>
            <div>
              <span>با ما همراه باشید</span>
            </div>

            <div className={styles.socialMediaLogosContainer}>
              <span className={styles.socialMediaLogo}>
                <BsInstagram />
              </span>
              <span className={styles.socialMediaLogo}>
                <BsTelegram />
              </span>
              <span className={styles.socialMediaLogo}>
                <BsFacebook />
              </span>
              <span className={styles.socialMediaLogo}>
                <BsWhatsapp />
              </span>
              <span className={styles.socialMediaLogo}>
                <BsYoutube />
              </span>
              <span className={styles.socialMediaLogo}>
                <BsTwitter />
              </span>
            </div>
          </div>
          {/*  */}
        </div>

        {/*  */}

        {/* screen < 1000px */}

        <div className={styles.alterdFooterLinesContainer}>
          {/*  */}

          <div className={styles.customerHelpContainer}>
            {/*  */}
            <div>
              <button onClick={() =>setFullCustomerServices(!showFullCustomerServices)}>
                <h4>خدمات مشتریان</h4>
                <span>
                  {showFullCustomerServices ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </button>

              {showFullCustomerServices ? (
                <ul>
                  <li>تماس با موبینو</li>
                  <li>درباره فروشگاه موبینو</li>
                  <li>قوانین و مقررات فروشگاه</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            {/*  */}
            <div>
              <button onClick={() => setFullBuyingGuide(!showFullBuyingGuide)}>
                <h4>راهنما خرید سایت</h4>
                <span>
                  {showFullBuyingGuide ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {showFullBuyingGuide ? (
                <ul>
                  <li>شرایط عودت کالا چیست ؟</li>
                  <li>چگونه کالا ارسال میشود ؟</li>
                  <li>چگونه هزینه پرداخت کنم ؟</li>
                  <li>چگونه سفارش بدم ؟</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            {/*  */}
            <div>
              <button onClick={() => setFullAccount(!showFullAccount)}>
                <h4>حساب کاربری</h4>
                <span>
                  {showFullAccount ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {showFullAccount ? (
                <ul>
                  <li>حساب کاربری</li>
                  <li>پیگیری سفارش</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            {/*  */}
          </div>
          {/*  */}
          <div className={styles.beWithUsContainer}>
            <div>
              <span>با ما همراه باشید</span>
            </div>

            <div className={styles.socialMediaLogosContainer}>
              <span className={styles.socialMediaLogo}>
                <BsInstagram />
              </span>
              <span className={styles.socialMediaLogo}>
                <BsTelegram />
              </span>
              <span className={styles.socialMediaLogo}>
                <BsFacebook />
              </span>
              <span className={styles.socialMediaLogo}>
                <BsWhatsapp />
              </span>
              <span className={styles.socialMediaLogo}>
                <BsYoutube />
              </span>
              <span className={styles.socialMediaLogo}>
                <BsTwitter />
              </span>
            </div>
          </div>
          {/*  */}
        </div>

        <div className={styles.phoneNumberContainer}>
          <span className={styles.phoneNumber}>شماره تماس :</span>

          <span>{persianConverter("02165858838")}</span>
          <span className={styles.dash}>-</span>
          <span>{persianConverter("09127264555")}</span>
        </div>

        <div className={styles.sourseContainer}>
          <span>
            تمامی اطلاعات محصولات از سایت دیجی کالا و کالاتیک برگرفته شده است{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
