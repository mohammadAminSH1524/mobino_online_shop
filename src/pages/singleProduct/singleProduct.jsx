import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

import styles from "./singleProduct.module.css";

import { FaApple, FaShoppingCart } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { FcShop } from "react-icons/fc";
import { BsShieldCheck, BsStarFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { TbBellRinging } from "react-icons/tb";
import {
  MdKeyboardArrowLeft,
  MdOutlineEventAvailable,
} from "react-icons/md";

import {
  discountChecker,
  discountPersentage,
  persianConverter,
  warehouseStatusChecker,
  availablityChecker,
} from "../../components/functions/functions";
import { addToCart, getAsyncProducts } from "../../features/sort/sort";

const SingleProduct = () => {
  const { value,  loading, products } = useSelector(
    (state) => state.sort
  );
  const [showFullIntroduction, setFullIntroduction] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  const [productId, setProductId] = useState({});

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setProductId(location.state.product.id);
    }
  }, [location]);

  const selectedProduct = products.find((product) => {
    return product.id === productId;
  });

  let selectedColor = "#ddd";
  if (selectedProduct) {
    switch (selectedProduct.color) {
      case "سبز":
        selectedColor = "#00e676";
        break;

      case "قرمز":
        selectedColor = "#f44336";
        break;

      case "مشکی":
        selectedColor = "#212121";
        break;

      case "آبی":
        selectedColor = "#2196f3";
        break;

      case "صورتی":
        selectedColor = "#ff80ab";
        break;

      case "سبز تیره":
        selectedColor = "#007e33";
        break;

      case "سفید":
        selectedColor = "#ffffff";
        break;

      case "خاکستری":
        selectedColor = "#9e9e9e";
        break;

      case "طلایی":
        selectedColor = "#c99212";
        break;

      case "آبی روشن":
        selectedColor = "#40aaff";
        break;

      case "بنفش":
        selectedColor = "#9c27b1";
        break;

      case "کرم":
        selectedColor = "#ffecca";
        break;

      case "زیتونی":
        selectedColor = "#BAB86C";
        break;

      case "گل بهی":
        selectedColor = "#FAD7BA";
        break;

      case "نقره ای":
        selectedColor = "#dedede";
        break;

      case "مسی":
        selectedColor = "#e65319";
        break;

      case "کرم":
        selectedColor = "#ffecca";
        break;

      case "یاسی":
        selectedColor = "#FDDDFB";
        break;

      default:
        selectedColor = "#fff";
        break;
    }
  }

  const addToCartHandler = (product, event) => {
    event.target.disabled = true;
    dispatch(addToCart(product.id));
  };
  
  if (selectedProduct) {
    return (
      <div className={styles.container}>
        <div className={styles.containerControll}>
          <section className={styles.routeAddress}>
            <Link to="/" className={styles.mobinoText}>
              موبینو
            </Link>

            <span className={styles.slash}>/</span>

            <Link to="/products" className={styles.phoneText}>
              گوشی موبایل
            </Link>

            <span className={styles.slash}>/</span>

            <span className={styles.phoneText}>
              <span> گوشی </span>
              <span>{selectedProduct.dividedTitle.phoneBrand}</span>
            </span>
          </section>

          <div className={styles.product}>
            <div className={styles.productImageContainer}>
              <img src={selectedProduct.image} alt="productImage" />
            </div>

            <div className={styles.productDetailContainer}>
              <h1 className={styles.productTitle}>{selectedProduct.title}</h1>

              <div className={styles.productDetail}>
                <section>
                  <span>ویژگی ها</span>

                  <ul className={styles.details}>
                    <li>
                      <span>فناوری صفحه نمایش :</span>
                      <span>{selectedProduct.Attributes.ScreenTechnology}</span>
                    </li>

                    <li>
                      <span>اندازه :</span>
                      <span>{selectedProduct.Attributes.size}</span>
                    </li>

                    <li>
                      <span>رزولوشن عکس :</span>
                      <span>
                        {
                          selectedProduct.Attributes.PhotoResolution
                            .numericalPart
                        }
                        {
                          selectedProduct.Attributes.PhotoResolution
                            .letterSection
                        }
                      </span>
                    </li>

                    <li>
                      <span>نسخه سیستم عامل :</span>
                      <span>
                        {selectedProduct.Attributes.OperatingSystemVersion}
                      </span>
                    </li>

                    <li>
                      <span>حافظه داخلی :</span>
                      <span>
                        {
                          selectedProduct.dividedTitle.phoneCapacity
                            .numericalPart
                        }{" "}
                        {
                          selectedProduct.dividedTitle.phoneCapacity
                            .letterSection
                        }
                      </span>
                    </li>

                    {selectedProduct.Attributes.IncludedItems ? (
                      <li>
                        <span>اقلام همراه :</span>
                        <span>{selectedProduct.Attributes.IncludedItems}</span>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>

                  <div className={styles.selectedColorContainer}>
                    <span> رنگ:</span>

                    <div className={styles.circleColorParent}>
                      <div
                        style={{ background: selectedColor }}
                        className={styles.circleColor}
                      ></div>
                    </div>

                    <span>{selectedProduct.color}</span>
                  </div>

                  {/* <div className={styles.colorsContainer}>
                    {selectedProduct.productDetail.map((detail, index) => {
                      return (
                        <div title="mmd">
                           <div
                          key={index}
                          className={styles.colorDetailContainer}
                        >
                          .
                        </div>
                        </div>
                       
                      );
                    })}
                  </div> */}

                  <div
                    style={
                      selectedProduct.Attributes.IncludedItems
                        ? { marginBottom: 0 }
                        : {}
                    }
                    className={styles.guarantee}
                  >
                    <span>گارانتی :</span>
                    <span>18 ماه گارانتی هما گستر + کد رجیستری</span>
                  </div>

                  {availablityChecker(selectedProduct) === 0 ? (
                    <div className={styles.unavailableContainer}>ناموجود</div>
                  ) : discountChecker(selectedProduct) === 0 ? (
                    <div className={styles.productPriceContainer}>
                      <div className={styles.price}>
                        <span className={styles.priceText}>
                          {persianConverter(selectedProduct.price)}
                        </span>
                        <span className={styles.tomanText}>تومان</span>
                      </div>

                      <button
                        onClick={(event) => addToCartHandler(selectedProduct,event)}
                        className={styles.addToCartButton}
                      >
                        <span className={styles.addToCartLogo}>
                          <FaShoppingCart />
                        </span>
                        <span className={styles.addToCartText}>
                          افزودن به سبد خرید
                        </span>
                      </button>
                    </div>
                  ) : discountPersentage(selectedProduct) >= 1 ? (
                    <>
                      <div className={styles.discountedProductPriceContainer}>
                        <div className={styles.prices}>
                          <div className={styles.aboutDiscountPrice}>
                            <div className={styles.discountText}>
                              <span>%</span>
                              <span>{discountPersentage(selectedProduct)}</span>
                            </div>

                            <div className={styles.offPrice}>
                              <span className={styles.priceText}>
                                {persianConverter(selectedProduct.price)}
                              </span>
                              <span className={styles.tomanText}>تومان</span>
                              <div className={styles.cross}></div>
                            </div>
                          </div>

                          <div className={styles.aboutPrice}>
                            <span>
                              {persianConverter(selectedProduct.offPrice)}
                            </span>
                            <span>تومان</span>
                          </div>
                        </div>

                        <button
                         onClick={(event) => addToCartHandler(selectedProduct,event)}
                          className={styles.addToCartButton}
                        >
                          <span className={styles.addToCartLogo}>
                            <FaShoppingCart />
                          </span>
                          <span className={styles.addToCartText}>
                            افزودن به سبد خرید
                          </span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className={styles.productPriceContainer}>
                      <div className={styles.price}>
                        <span className={styles.priceText}>
                          {persianConverter(selectedProduct.price)}
                        </span>
                        <span className={styles.tomanText}>تومان</span>
                      </div>

                      <button
                        onClick={(event) => addToCartHandler(selectedProduct,event)}
                        className={styles.addToCartButton}
                      >
                        <span className={styles.addToCartLogo}>
                          <FaShoppingCart />
                        </span>
                        <span className={styles.addToCartText}>
                          افزودن به سبد خرید
                        </span>
                      </button>
                    </div>
                  )}
                </section>

                {/* second */}
                <div>
                  <div className={styles.brandContainer}>
                    <span>برند :</span>
                    <span className={styles.brand}>
                      {selectedProduct.brand}
                    </span>
                  </div>

                  <div className={styles.comments}>
                    <span>{persianConverter(0)} نظر</span>
                    <span>برای این محصول ثبت شده</span>
                  </div>

                  <div className={styles.GuaranteeOfOriginality}>
                    <span>{<HiBadgeCheck />}</span>
                    <span>ضمانت اصل بودن کالا</span>
                  </div>

                  <div className={styles.ratingContainer}>
                    <span className={styles.ratingLogo}>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </span>
                    <span>{persianConverter("(0)")}</span>
                  </div>

                  <div className={styles.warehouseStatus}>
                    <span>{warehouseStatusChecker(selectedProduct)}</span>
                  </div>

                  <img
                    src="https://kalatik.com/media/0/instalment.jpg"
                    alt=""
                  />
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/*  */}
          <div className={styles.specifications}>
            <section className={styles.specificationsSection}>
              <div className={styles.introContainer}>
                <div className={styles.introTitleContainer}>
                  <div className={styles.specificationsCross}></div>
                  <div className={styles.introTitle}>معرفی</div>
                </div>

                {/* conditional rendering */}

                {showFullIntroduction ? (
                  <>
                    <p className={styles.introParagraph}>
                      {selectedProduct.shortenedIntroduction}
                    </p>

                    <button
                      onClick={() => setFullIntroduction(!showFullIntroduction)}
                      className={styles.seeMoreContainer}
                    >
                      <span className={styles.seeMoreText}>بیشتر</span>
                      <span className={styles.seeMoreLogo}>
                        <MdKeyboardArrowLeft />
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <p className={styles.fullIntroParagraph}>
                      {selectedProduct.Introduction}
                    </p>

                    <button
                      onClick={() => setFullIntroduction(!showFullIntroduction)}
                      className={styles.seeMoreContainer}
                    >
                      <span className={styles.seeMoreText}>بستن</span>
                      <span className={styles.seeMoreLogo}>
                        <MdKeyboardArrowLeft />
                      </span>
                    </button>
                  </>
                )}

                {/*  */}
              </div>

              <div className={styles.productSpecificationsContainer}>
                <div className={styles.introTitleContainer}>
                  <div className={styles.specificationsCross}></div>
                  <div className={styles.introTitle}>مشخصات</div>
                </div>

                <div className={styles.productSpecifications}>
                  <div>مشخصات</div>
                  <ul>
                    <li>
                      <span>ابعاد</span>
                      <span>{selectedProduct.specifications.Dimensions}</span>
                    </li>
                    <li>
                      <span>وزن</span>
                      <span>
                        {persianConverter(
                          selectedProduct.specifications.Weight.numericalPart
                        )}
                        {selectedProduct.specifications.Weight.letterSection}
                      </span>
                    </li>
                    <li>
                      <span>فناوری صفحه نمایش</span>
                      <span>{selectedProduct.Attributes.ScreenTechnology}</span>
                    </li>
                    <li>
                      <span>نسخه سیستم عامل</span>
                      <span>
                        {selectedProduct.Attributes.OperatingSystemVersion}
                      </span>
                    </li>
                    <li>
                      <span>بازه‌ی اندازه صفحه نمایش</span>
                      <span>
                        {
                          selectedProduct.specifications.ScreenSizeRange
                            .numericalPart
                        }
                        {
                          selectedProduct.specifications.ScreenSizeRange
                            .letterSection
                        }
                      </span>
                    </li>

                    <li>
                      <span>اندازه</span>
                      <span>{selectedProduct.Attributes.size}</span>
                    </li>

                    <li>
                      <span>رزولوشن عکس</span>
                      <span>
                        {
                          selectedProduct.Attributes.PhotoResolution
                            .numericalPart
                        }
                        {
                          selectedProduct.Attributes.PhotoResolution
                            .letterSection
                        }
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <aside className={styles.specificationsAside}>
              <div className={styles.specificationsProduct}>
                <div className={styles.productSummaryHeader}>
                  <img src={selectedProduct.menuImage} alt="" />
                  <div>
                    <div className={styles.productSummaryTitle}>
                      <span>{selectedProduct.title}</span>
                    </div>

                    <div className={styles.selectedColorContainer}>
                      <div className={styles.circleColorParent}>
                        <div
                          style={{ background: selectedColor }}
                          className={styles.circleColor}
                        ></div>
                      </div>

                      <span>{selectedProduct.color}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.productSummaryBody}>
                  <div>
                    <span className={styles.BsShieldCheckLogo}>
                      <BsShieldCheck />
                    </span>
                    <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
                  </div>

                  <div>
                    <span className={styles.MdOutlineEventAvailableLogo}>
                      <MdOutlineEventAvailable />
                    </span>
                    <span>{warehouseStatusChecker(selectedProduct)}</span>
                  </div>
                </div>

                {availablityChecker(selectedProduct) > 0 ? (
                  discountChecker(selectedProduct) === 0 ? (
                    // ?تخفیف ندارد
                    <div className={styles.discountedProductSummary}>
                      <div>
                        <div className={styles.aboutPrice}>
                          <span>
                            {persianConverter(selectedProduct.offPrice)}
                          </span>
                          <span>تومان</span>
                        </div>
                      </div>

                      <button
                       onClick={(event) => addToCartHandler(selectedProduct,event)}
                        className={styles.addToCartButton}
                      >
                        <span className={styles.addToCartLogo}>
                          <FaShoppingCart />
                        </span>
                        <span className={styles.addToCartText}>
                          افزودن به سبد خرید
                        </span>
                      </button>
                    </div>
                  ) : //  ?
                  discountPersentage(selectedProduct) >= 1 ? (
                    // ? تخفیف 1درصد و بالای 1درصد
                    <div className={styles.discountedProductSummary}>
                      <div>
                        <div className={styles.aboutPrice}>
                          <span>
                            {persianConverter(selectedProduct.offPrice)}
                          </span>
                          <span>تومان</span>
                        </div>

                        <div className={styles.offPrice}>
                          <span className={styles.priceText}>
                            {persianConverter(selectedProduct.price)}
                          </span>
                          <span className={styles.tomanText}>تومان</span>
                          <div className={styles.cross}></div>
                        </div>
                      </div>

                      <button
                        onClick={(event) => addToCartHandler(selectedProduct,event)}
                        className={styles.addToCartButton}
                      >
                        <span className={styles.addToCartLogo}>
                          <FaShoppingCart />
                        </span>
                        <span className={styles.addToCartText}>
                          افزودن به سبد خرید
                        </span>
                      </button>
                    </div>
                  ) : (
                    // ?
                    //  ? تخفیف زیره 1 درصد
                    <div className={styles.discountedProductSummary}>
                      <div>
                        <div className={styles.aboutPrice}>
                          <span>
                            {persianConverter(selectedProduct.offPrice)}
                          </span>
                          <span>تومان</span>
                        </div>
                      </div>

                      <button
                       onClick={(event) => addToCartHandler(selectedProduct,event)}
                        className={styles.addToCartButton}
                      >
                        <span className={styles.addToCartLogo}>
                          <FaShoppingCart />
                        </span>
                        <span className={styles.addToCartText}>
                          افزودن به سبد خرید
                        </span>
                      </button>
                    </div>
                    //  ?
                  )
                ) : (
                  <button className={styles.unAvailableProductSummary}>
                    <span className={styles.TbBellRingingLogo}>
                      <TbBellRinging />
                    </span>
                    <span>خبرم کنید</span>
                  </button>
                )}
              </div>
            </aside>
          </div>
          {/*  */}
        </div>
      </div>
    );
  } else {
    return <div>failed</div>;
  }
};

export default SingleProduct;
