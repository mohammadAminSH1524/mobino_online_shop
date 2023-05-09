import { useDispatch, useSelector } from "react-redux";
import styles from "./sortComponent.module.css";

import { useEffect, useState } from "react";

import { getAsyncProducts, sorting } from "../../features/sort/sort";
import { useLocation, useNavigate } from "react-router-dom";
import { BiSortDown } from "react-icons/bi";
import { brandProducts, discountedProducts } from "../functions/functions";

const SortComponent = () => {
  const { products } = useSelector((state) => state.sort);
  const dispatch = useDispatch(); 
  const _discountedProducts = discountedProducts(products);
  const pathname = useLocation().pathname;
  const spletedPathname = pathname.split("-")[0].split("/")[1];

  let findedBrand = brandProducts(products, spletedPathname);
  if (spletedPathname === "products") {
    findedBrand = products;
  }

  if (spletedPathname === "incredible") {
    findedBrand = _discountedProducts;
  }

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.navFilterContainer}>
        <div>
          <div className={styles.sortingText}>
            <span className={styles.sortingLogo}>
              <BiSortDown />
            </span>
            <span>مرتب سازی:</span>
          </div>

          <button onClick={() => dispatch(sorting("bestselling"))}>
            پرفروش ترین ها
          </button>
          <button onClick={() => dispatch(sorting("mostPopular"))}>
            پربازدیدترین ها
          </button>
          <button onClick={() => dispatch(sorting("expensive"))}>
            گران ترین
          </button>
          <button onClick={() => dispatch(sorting("cheapest"))}>
            ارزان ترین
          </button>

          <button onClick={() => dispatch(sorting("bestselling"))}>
            پیشنهاد خریداران
          </button>
        </div>
      </nav>
      <span> {findedBrand.length} کالا</span>
    </div>
  );
};

export default SortComponent;
