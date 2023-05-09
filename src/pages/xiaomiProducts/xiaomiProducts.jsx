import styles from "./xiaomiProducts.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productsDisplayer } from "../../components/functions/productsDisplayer/productsDisplayer";

import SortComponent from "../../components/sort/sortComponent";
import FilterComponet from "../../components/filter/filterComponent";
import { brandProducts } from "../../components/functions/functions";
import { getAsyncProducts } from "../../features/sort/sort";

const XiaomiProductsPage = () => {
  const { products } = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  const xiaomiProducts =brandProducts(products ,"xiaomi")

  return (
    <div className={styles.container}>
      <div className={styles.containerControll}>
        <section className={styles.routeAddress}>
          <Link to="/" className={styles.mobinoText}>
            موبینو
          </Link>

          <span className={styles.slash}>/</span>

          <Link to="" className={styles.phoneText}>
           محصولات شیائومی
          </Link>
        </section>

        <section className={styles.productsContainer}>
          <div className={styles.filtersContainerParent}>
            <FilterComponet />

           
          </div>

          <div className={styles.products}>
            <SortComponent />

            {/* // ?_________________________________________ */}

            <div className={styles.productList}>
              {productsDisplayer(xiaomiProducts)}
            </div>

            {/* // ?_________________________________________ */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default XiaomiProductsPage;
