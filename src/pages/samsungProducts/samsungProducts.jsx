import styles from "./samsungProducts.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productsDisplayer } from "../../components/functions/productsDisplayer/productsDisplayer";

import SortComponent from "../../components/sort/sortComponent";
import FilterComponet from "../../components/filter/filterComponent";
import { brandProducts } from "../../components/functions/functions";
import { getAsyncProducts } from "../../features/sort/sort";

const SamsungProductsPage = () => {
  const { products } = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  const samsungProducts = brandProducts(products, "samsung");

  return (
    <div className={styles.container}>
      <div className={styles.containerControll}>
        <section className={styles.routeAddress}>
          <Link to="/" className={styles.mobinoText}>
            موبینو
          </Link>

          <span className={styles.slash}>/</span>

          <Link to="" className={styles.phoneText}>
            محصولات سامسونگ
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
              {productsDisplayer(samsungProducts)}
            </div>

            {/* // ?_________________________________________ */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SamsungProductsPage;
