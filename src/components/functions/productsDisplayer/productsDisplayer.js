import { Link } from "react-router-dom";
import styles from "./productDisplayer.module.css";
import {
  availablityChecker,
  discountAmountStatusChecker,
  discountChecker,
  discountPersentage,
  persianConverter,
} from "../functions";

export const productsDisplayer = (products, _discountText = true) => {
  if (products) {
    return products.map((product, index) => {
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
        // ?_________________________________________
        <Link
          to={`/products/product_${product.id}?${product.title}`}
          state={{ product: product }}
          className={styles.product}
          key={index}
        >
          {_discountText ? (
            <div className={styles.discountText}>
              {discountChecker(product) > 0
                ? discountAmountStatusChecker(product)
                : ""}
            </div>
          ) : (
            ""
          )}

          {availablityChecker === 0 ? (
            ""
          ) : (
            <div
              style={{ background: selectedColor }}
              className={styles.productColor}
            ></div>
          )}

          <img
            className={styles.productImage}
            src={product.menuImage}
            alt={` product${index + 1}`}
          />
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
            <span>{product.dividedTitle.phoneCapacity.numericalPart}</span>
            <span> </span>
            <span>{product.dividedTitle.phoneCapacity.letterSection}</span>
          </div>

          {availablityChecker(product) === 0 ? (
            <div className={styles.productPriceContainer}>ناموجود</div>
          ) : discountChecker(product) === 0 ? (
            <div className={styles.productPriceContainer}>
              <span className={styles.priceText}>
                {persianConverter(product.offPrice)}
              </span>
              <span className={styles.tomanText}>تومان</span>
            </div>
          ) : discountPersentage(product) >= 1 ? (
            <>
              <div className={styles.productPriceContainerWITHOff}>
                <span className={styles.priceText}>
                  {persianConverter(product.offPrice)}
                </span>
                <span className={styles.tomanText}>تومان</span>

                <div className={styles.discountPersentageContainer}>
                  <span className={styles.percentageIcon}>%</span>
                  <span className={styles.percentageNumber}>
                    {persianConverter(discountPersentage(product))}
                  </span>
                </div>
              </div>

              <div className={styles.offPriceContainer}>
                <span className={styles.offPriceText}>
                  {persianConverter(product.price)}
                </span>
                <span className={styles.tomanText}>تومان</span>

                <span className={styles.cross}></span>
              </div>
            </>
          ) : (
            <div className={styles.productPriceContainer}>
              <span className={styles.priceText}>
                {persianConverter(product.offPrice)}
              </span>
              <span className={styles.tomanText}>تومان</span>
            </div>
          )}
        </Link>
      );
    });
  } else {
    return <div>fetching data failed</div>;
  }
};
