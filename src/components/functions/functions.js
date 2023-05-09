import persianJs from "persianjs";
import styles from "./functions.module.css";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";



export const persianConverter = (number) => {
  const sepratedNumber = number.toLocaleString();
  const persianNumber = persianJs(sepratedNumber).englishNumber();
  return persianNumber._str;
};

export const truncate = (str, n) => {
  // console.log(str.length);
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
};

// ?products

export const brandProducts = (products, brand) => {
  const filteredProducts = products.filter((product) => {
    return product.brand === brand;
  });
  return filteredProducts;
};

export const discountedProducts = (products) => {
  const discountedProducts = products.filter((product) => {
    // const discountAmount = product.price - product.offPrice;
    // return discountAmount >= 1;
    const discountAmount = product.price - product.offPrice;
    const discountPersentage = ((discountAmount / product.price) * 100).toFixed(
      0
    );
    return discountPersentage >= 1;
  });

  return discountedProducts;
};

export const bestsellingSortedProducts = (products) => {
  const sortedProducts = _.orderBy(products, ["avgRate"], ["desc"]);
  return sortedProducts;
};
export const sortedEconemicProducts = (products) => {
  const sortedProducts = _.orderBy(products, ["offPrice"], ["asc"]);
  return sortedProducts;
};

export const sortedPopularProducts = (products) => {
  const sortedProducts = _.orderBy(products, ["numberOfPoints"], ["desc"]);
  return sortedProducts;
};

// ?product

export const discountAmountStatusChecker = (product) => {
  const discountAmount = product.price - product.offPrice;
  if (discountAmount !== 0) {
    const discountPersentage = ((discountAmount / product.price) * 100).toFixed(
      0
    );
    if (discountPersentage < 1) return "";
    else if (discountPersentage < 4) return "فروش ویژه";
    else return "فروش فوق ویژه!";
  } else return "";
};

export const discountPersentage = (product) => {
  const discountAmount = product.price - product.offPrice;
  const discountPersentage = ((discountAmount / product.price) * 100).toFixed(
    0
  );
  // if (discountPersentage < 1) return "";
  return discountPersentage;
};

export const selectedProductFinder = (product) => {
  const selectedProduct = product.productDetail.find((p) => p.selected);
  return selectedProduct;
};

export const discountChecker = (product) => {
  const discountAmount = product.price - product.offPrice;
  return discountAmount;
};

export const availablityChecker = (product) => {
  return product.quantity;
};

export const warehouseStatusChecker = (product) => {
  if (product.quantity === 0) {
    return <span className={styles.notAvailable}>ناموجود </span>;
  } else if (product.quantity === 1) {
    return (
      <span className={styles.lowAvailabality}>
        تنها 1 عدد در انبار باقی مانده
      </span>
    );
  } else if (product.quantity === 2) {
    return (
      <span className={styles.lowAvailabality}>
        تنها 2 عدد در انبار باقی مانده
      </span>
    );
  } else {
    return <span className={styles.available}>موجود در انبار </span>;
  }
};
export const cartWarehouseStatusChecker = (product) => {
  if (product.quantity === 0) {
    return <span className={styles.notAvailable}>ناموجود </span>;
  } else if (product.quantity === 1) {
    return (
      <span className={styles.lowAvailabality}>
        تنها 1 عدد در انبار باقی مانده
      </span>
    );
  } else if (product.quantity === 2) {
    return (
      <span className={styles.lowAvailabality}>
        تنها 2 عدد در انبار باقی مانده
      </span>
    );
  } else {
    return "";
  }
};

export const cartDiscountChecker = (
  commodityPrices = 0,
  totalShoppingCart = 0
) => {
  return Boolean(commodityPrices - totalShoppingCart);
};

export const parchaseProfit =(commodityPrices,totalShoppingCart) =>{
  return persianConverter(commodityPrices - totalShoppingCart )
}


export const NumberOfGoods =(cart)=>{
const numOfGoods = cart.reduce((acc,curr)=>{
  return acc + curr.cartQuantity
 },0)
//  console.log(numOfGoods);
 return persianConverter(numOfGoods) 
}
