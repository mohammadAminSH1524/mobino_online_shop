import { useDispatch, useSelector } from "react-redux";
import styles from "./cartPage.module.css";
import {
  addToCart,
  deleteAllCartItems,
  deleteCartItem,
  getAsyncProducts,
} from "../../features/sort/sort";
import { useEffect, useLayoutEffect } from "react";
import {
  NumberOfGoods,
  cartDiscountChecker,
  cartWarehouseStatusChecker,
  discountAmountStatusChecker,
  discountChecker,
  parchaseProfit,
  persianConverter,
} from "../../components/functions/functions";
import { TbShoppingCart } from "react-icons/tb";
import { HiFaceFrown } from "react-icons/hi2";
import { BiArrowBack } from "react-icons/bi";
import { BsTrash, BsPlus, BsShieldCheck } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { MdOutlineEventAvailable } from "react-icons/md";
import { toast } from "react-toastify";

import Lottie from "lottie-react";
import emptyCart from "../../lotties/empty-cart.json";

const CartPage = () => {
  const { products, cart, commodityPrices, totalShoppingCart } = useSelector(
    (state) => state.sort
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  if (cart.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyCartContainerControll}>

          

          <section className={styles.emptyCartContainer}>
            <div className={styles.logosContainer}>
              {/* <div className={styles.emptyCartLogo}>
                <TbShoppingCart />
              </div>
              <div className={styles.sadFaceLogo}>
                <HiFaceFrown />
              </div> */}
              <Lottie animationData={emptyCart}/>
            </div>
            {/* <div className={styles.emptyCartText}>سبد خرید شما خالیه !</div> */}
            <div className={styles.emptyCartText}></div>
            <Link to="/products" className={styles.orderButton}>
              <span className={styles.orderButtonText}>ثبت اولین سفارش </span>
              <span className={styles.orderButtonLogo}>
                <BiArrowBack />
              </span>
            </Link>
          </section>
        </div>
      </div>
    );
  }

  // console.log(NumberOfGoods(cart));

  // console.log("commodityPrices", commodityPrices);
  // console.log("totalShoppingCart", totalShoppingCart);

  return (
    <div className={styles.container}>
      <div className={styles.containerControll}>
        <section className={styles.cartHeader}>
          <div>
            <span className={styles.cartHeaderText}>سبد خرید</span>
            <span className={styles.cartHeaderLogo}>
              {persianConverter(cart.length)}
            </span>
          </div>
          <div className={styles.cross}></div>
          
        </section>
        {/* cart body */}
        <section className={styles.cartBody}>
          <div className={styles.cartItems}>
            <div className={styles.cartItemsHeader}>
              <div>
                <span>سبد خرید شما</span>
                <span>{persianConverter(cart.length)} کالا</span>
              </div>
              <button
                onClick={() => dispatch(deleteAllCartItems())}
                className={styles.deleteAllContainer}
              >
                <span className={styles.deleteAllText}>حذف همه</span>
                <span className={styles.deleteAllLogo}>
                  <BsTrash />
                </span>
              </button>
            </div>
            <div className={styles.cartItemsBody}>
              {cart.map((product, index) => {
                let selectedColor = "#ddd";
                if (product) {
                  switch (product.color) {
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
                return (
                  <div key={index} className={styles.product}>
                    <section>
                      <Link
                        to={`/products/product_${product.id}?${product.title}`}
                        state={{ product: product }}
                      >
                        <img
                          src={product.menuImage}
                          className={styles.productImage}
                        ></img>
                      </Link>

                      <div className={styles.discountText}>
                        {discountChecker(product) > 0
                          ? discountAmountStatusChecker(product)
                          : ""}
                      </div>
                      <div className={styles.controllBtns}>
                        {/* increament */}
                        <button
                          onClick={() => dispatch(addToCart(product.id))}
                          className={styles.controllBtnsPlus}
                        >
                          <BsPlus />
                        </button>
                        {/* cart Quantity */}
                        <div className={styles.cartQuantity}>
                          {persianConverter(product.cartQuantity)}
                        </div>
                        {/* decreament */}
                        <button
                          onClick={() => dispatch(deleteCartItem(product.id))}
                        >
                          {product.cartQuantity === 1 ? (
                            <span className={styles.controllBtnsLogo}>
                              <BsTrash />
                            </span>
                          ) : (
                            <span className={styles.controllBtnsMinus}>
                              <BiMinus />
                            </span>
                          )}
                        </button>
                      </div>
                    </section>
                    {/*  */}
                    <section>
                      <div className={styles.productTitle}>
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
                      <div className={styles.colorContainer}>
                        <div
                          style={{ backgroundColor: selectedColor }}
                          className={styles.colorLogo}
                        ></div>
                        <div className={styles.text}>{product.color}</div>
                      </div>
                      <div className={styles.guaranteeContainer}>
                        <div className={styles.logo}>
                          <BsShieldCheck />
                        </div>
                        <div className={styles.text}>
                          18 ماه گارانتی هما گستر + کد رجیستری
                        </div>
                      </div>
                      <div className={styles.sellerContainer}>
                        <div className={styles.logo}>
                          <FcShop />
                        </div>
                        <div className={styles.text}>موبینو</div>
                      </div>
                      <div className={styles.availableContainer}>
                        <div className={styles.logo}>
                          <MdOutlineEventAvailable />
                        </div>
                        <div className={styles.text}>موجود در انبار موبینو</div>
                      </div>

                      <div className={styles.warehouseStatusContainer}>
                        {cartWarehouseStatusChecker(product)}
                      </div>

                      <div className={styles.priceContainer}>
                        <span>{persianConverter(product.offPrice)}</span>
                        <span>تومان</span>
                      </div>
                    </section>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.cartSummary}>
            <div className={styles.commodityPricesContainer}>
              <div>
                <span>قیمت کالاها</span>
                <span>({NumberOfGoods(cart)})</span>
              </div>
              <div>
                <span>{persianConverter(commodityPrices)}</span>
                <span>تومان</span>
              </div>
            </div>

            <div className={styles.totalShoppingCartContainer}>
              <div>جمع سبد خرید</div>
              <div>
                <span>{persianConverter(totalShoppingCart)}</span>
                <span>تومان</span>
              </div>
            </div>

            {!cartDiscountChecker(commodityPrices, totalShoppingCart) ? (
              ""
            ) : (
              <div className={styles.parchaseProfitContainer}>
                <div>سوده شما از خرید</div>
                <div>
                  <span>
                    {parchaseProfit(commodityPrices, totalShoppingCart)}
                  </span>
                  <span>تومان</span>
                </div>
              </div>
            )}

            <Link to="/auth" className={styles.orderBtn}>
              ثبت سفارش
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
