import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageSlider from "../../components/imageSlider/imageSlider";

import styles from "./homePage.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsQuestionSquare } from "react-icons/bs";
import { VscCheckAll } from "react-icons/vsc";
import {
  bestsellingSortedProducts,
  persianConverter,
  sortedEconemicProducts,
  sortedPopularProducts,
} from "../../components/functions/functions.js";
import { Link } from "react-router-dom";
import { getAsyncProducts } from "../../features/sort/sort";


const HomePage = () => {
  const [showFullDescription, setFullDescription] = useState(true);
  const [showFullFAQ1, setFullFAQ1] = useState(false);
  const [showFullFAQ2, setFullFAQ2] = useState(false);

  const slides = [
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/cf7c20be2b143b381d67f51810f0a3730e1083df_1665865699.jpg?x-oss-process=image/quality,q_95",
      title: "firstImage",
      id: 0,
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/635a7a83a8e6fb49a6ff0b1338e0d1821707a10b_1676217287.jpg?x-oss-process=image/quality,q_95",
      title: "secondImage",
      id: 1,
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/5bde4cf4833a8b23bd51841b3bf64079da9fb282_1670065161.jpg?x-oss-process=image/quality,q_95",
      title: "thirdImage",
      id: 2,
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/620b413c91ebb4a5d0bc37ae268f9e0745ce803c_1665865368.jpg?x-oss-process=image/quality,q_95",
      title: "fourthImage",
      id: 3,
    },

    // ?______________________________________________

    
    {
      url: "https://cdn.kalatik.com/media/0/23/02/19/1676795962689.jpg",
      id: 5,
    },
    {
      url: "https://cdn.kalatik.com/media/0/23/02/23/16771374197410.jpg",
      id: 6,
    },
    {
      url: "https://cdn.kalatik.com/media/0/23/02/22/16770733154810.jpg",
      id: 7,
    },
   
  ];

  const { products } = useSelector((state) => state.sort);

  const BestSellingProducts = bestsellingSortedProducts(products).slice(0, 12);
  const econemicProducts = sortedEconemicProducts(products).slice(0, 5);
  const popularProducts = sortedPopularProducts(products).slice(0, 5);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.ImageSliderContainer}>
        <ImageSlider slides={slides} />
      </section>

      <section className={styles.productsContainer}>
        <div className={styles.popularAndEconemicContainer}>
          {/* econemic filter is : bestOfincredible offers */}
          <div className={styles.econemicProductsContainer}>
            <h3> گوشی های اقتصادی</h3>
            <div className={styles.border}>
              <div className={styles.econemicProducts}>
                {econemicProducts.map((product, index) => {
                  return (
                    <div key={index}>
                      <Link
                        to={`/products/product_${product.id}?${product.title}`}
                        state={{ product: product }}
                      >
                        <img src={product.menuImage} alt="" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.watchAllContainer}>
              <span className={styles.watchAllText}>مشاهده</span>
              <span className={styles.watchAllLogo}>
                <IoIosArrowBack />
              </span>
            </div>
          </div>
          {/* popular  filter is : avgRate */}
          <div className={styles.popularProductsContainer}>
            <h3>محبوب ترین گوشی ها</h3>
            <div className={styles.border}>
              <div className={styles.popularProducts}>
                {popularProducts.map((product, index) => {
                  return (
                    <div key={index}>
                      <Link
                        to={`/products/product_${product.id}?${product.title}`}
                        state={{ product: product }}
                      >
                        <img src={product.menuImage} alt="" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.watchAllContainer}>
              <span className={styles.watchAllText}>مشاهده</span>
              <span className={styles.watchAllLogo}>
                <IoIosArrowBack />
              </span>
            </div>
          </div>
          {/* */}
        </div>
        {/*  */}
        <div className={styles.BestSellingProductsContainer}>
          <h3>پرفروش ترین ها</h3>
          <div className={styles.border}>
            <div className={styles.BestSellingProducts}>
              {BestSellingProducts.map((product, index) => {
                return (
                  <div key={index}>
                    <Link
                      to={`/products/product_${product.id}?${product.title}`}
                      state={{ product: product }}
                    >
                      <img src={product.menuImage} alt="best selling product" />
                      <span>{persianConverter(index + 1)}</span>
                      <div className={styles.BestSellingProductTitle}>
                        <div>
                          <span>گوشی موبایل</span>
                          <span> </span>
                          <span>{product.dividedTitle.phoneBrand}</span>
                          <span> </span>
                          <span>مدل</span>
                          <span> </span>
                          <span>{product.dividedTitle.phoneModel}</span>
                          <span> </span>
                          <span>ظرفیت</span>
                          <span> </span>
                          <span>
                            {product.dividedTitle.phoneCapacity.numericalPart}
                          </span>
                          <span> </span>
                          <span>
                            {product.dividedTitle.phoneCapacity.letterSection}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <span>
            <Link to="">مشاهده همه</Link>
          </span>
        </div>
      </section>

      <section className={styles.suggestionsContainer}>
        <Link to="/incredible-offers">
          <img
            src={require("../../assessts/suggestions/suggest_1.jpg")}
            alt=""
          />
        </Link>
        <Link to="">
          <img
            src={require("../../assessts/suggestions/suggest_2.jpg")}
            alt=""
          />
        </Link>
      </section>

      <section className={styles.description}>
        <h3 className={styles.descriptionTitle}>گوشی موبایل و لوازم جانبی</h3>

        {showFullDescription ? (
          // ?_________________________________________
          <div>
            <p className={styles.descriptionParagraph}>
              گوشی موبایل و تلفن هوشمند یک تلفن همراه با یک کامپیوتر یکپارچه و
              سایر ویژگی‌هایی است که در اصل به تلفن‌ها مرتبط نیستند. از میان این
              ویژگی‌ها می‌توان به سیستم‌عامل، وب‌گردی و قابلیت اجرای برنامه‌های
              نرم‌افزاری اشاره کرد. گوشی‌های هوشمند بخشی از زندگی روزمره ما
              هستند و نه‌تنها به ما کمک می‌کنند که با دیگران در ارتباط بمانیم
              بلکه امکانات بسیار گسترده‌تری مانند عکاسی و...
            </p>
            <button
              onClick={() => setFullDescription(!showFullDescription)}
              className={styles.readMoreBtn}
            >
              <span className={styles.readMoreBtnText}>مشاهده بیشتر</span>
              <span className={styles.readMoreBtnDownArrow}>
                <IoIosArrowDown />
              </span>
            </button>
          </div>
        ) : (
          // ?_________________________________________
          // ?_________________________________________
          <div className={styles.readLessContainer}>
            <p className={styles.fullDescriptionParagraph}>
              گوشی موبایل و تلفن هوشمند یک تلفن همراه با یک کامپیوتر یکپارچه و
              سایر ویژگی‌هایی است که در اصل به تلفن‌ها مرتبط نیستند. از میان این
              ویژگی‌ها می‌توان به سیستم‌عامل، وب‌گردی و قابلیت اجرای برنامه‌های
              نرم‌افزاری اشاره کرد. گوشی‌های هوشمند بخشی از زندگی روزمره ما
              هستند و نه‌تنها به ما کمک می‌کنند که با دیگران در ارتباط بمانیم
              بلکه امکانات بسیار گسترده‌تری مانند عکاسی و فیلمبرداری، بازی کردن،
              کتاب خواندن و غیره را در اختیار ما قرار می‌دهند. از سوی دیگر، برای
              استفاده از برخی از این امکانات و همچنین، مراقبت از سلامت گوشی
              هوشمند به یک سری لوازم جانبی نیاز داریم. به همین دلیل، ما قصد
              داریم شما را با انواع گوشی‌های هوشمند و لوازم جانبی آن‌ها آشنا
              کنیم.
            </p>

            <h4 className={styles.descriptionTitle}>
              خرید انواع موبایل و لوازم جانبی موبایل از موبینو
            </h4>

            <p className={styles.fullDescriptionParagraph}>
              فروشگاه اینترنتی موبینو این امکان را برای شما فراهم کرده است که
              موبایل‌های جدید مانند موبایل نوت ۹، نوت 10، موبایل تاشو سامسونگ،
              موبایل ردمی نوت 9، موبایل نوت 8 را در سریع‌ترین زمان ممکن تهیه
              کنید. لیست لوازم جانبی موبایل و ارزانترین لوازم جانبی موبایل نیز
              در این فروشگاه خرید اینترنتی لوازم جانبی موبایل و تلفن همراه در
              دسترس است و حتی می‌تواند برای خرید عمده لوازم جانبی موبایل نیز
              بسیار مناسب باشد. بنابراین، اگر به دنبال فروشگاه لوازم جانبی
              موبایل و خرید و فروش لوازم جانبی موبایل هستید، موبینو انتخاب
              مناسبی برای شماست. از طریق این سایت می‌توانید انواع گوشی 5G، گوشی
              4G، دوسیم‌کارت و تک‌سیم‌کارت را تهیه کنید.
            </p>
            <button
              onClick={() => setFullDescription(!showFullDescription)}
              className={styles.readLessBtn}
            >
              <span className={styles.readLessBtnText}>مشاهده کمتر</span>
              <span className={styles.readLessBtnUpArrow}>
                <IoIosArrowUp />
              </span>
            </button>
          </div>
          // ?_________________________________________
        )}
      </section>

      <section className={styles.FAQ}>
        <div className={styles.FAQLogo}>
          <BsQuestionSquare />
        </div>

        <div className={styles.FAQTitle}>سوالات متداول گوشی موبایل</div>

        <div className={styles.FAQs}>
          {/* // ?_________________________________________ */}
          <div>
            <button
              onClick={() => setFullFAQ1(!showFullFAQ1)}
              className={styles.FAQ1Q}
            >
              <h1>ارزان ترین سایت خرید گوشی کدام فروشگاه است؟</h1>
              <span>
                {showFullFAQ1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>

            {showFullFAQ1 ? (
              <p className={styles.FAQ1A}>
                <span className={styles.check}>
                  <VscCheckAll />
                </span>{" "}
                فروشگاه اینترنتی{" "}
                <strong>
                  <Link to="">موبینو‌</Link>
                </strong>{" "}
                به عنوان یک مرجع جامع با قیمت‌های به روز، این امکان را فراهم
                کرده که بتوانید جدیدترین و ارزان ترین گوشی‌های بازار در طرح‌ها و
                رنگ‌های متنوع مانند گوشی موبایل سامسونگ و گوشی موبایل شیائومی را
                مقایسه و خریداری کنید.
              </p>
            ) : (
              ""
            )}
          </div>
          {/* // ?_________________________________________ */}
          <div>
            <button
              onClick={() => setFullFAQ2(!showFullFAQ2)}
              className={styles.FAQ1Q}
            >
              <h1>چطور میتوانم سفارشم را پیگیری کنم ؟</h1>
              <span>
                {showFullFAQ2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>

            {showFullFAQ2 ? (
              <p className={styles.FAQ1A}>
                وارد سایت موبینو شوید. روی گزینه سفارش های من کلیک کنید. در این
                قسمت با کلیک روی جزییات میتوانید سفارش خود را ببینید. میتوانید
                در این قسمت روند آماده سازی و مراحل ارسال سفارش خود را پیگیری
                کنید.
              </p>
            ) : (
              ""
            )}
          </div>
          {/* // ?_________________________________________ */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
