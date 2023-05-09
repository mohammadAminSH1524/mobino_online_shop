import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productsDisplayer } from "../../components/functions/productsDisplayer/productsDisplayer";
import { brandProducts } from "../../components/functions/functions";

import styles from "./appleProducts.module.css";

import SortComponent from "../../components/sort/sortComponent";
import FilterComponet from "../../components/filter/filterComponent";
import { getAsyncProducts } from "../../features/sort/sort";

const AppleProductsPage = () => {
  const { products } = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  const appleProducts = brandProducts(products, "apple");

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.containerControll}>
        <section className={styles.routeAddress}>
          <Link to="/" className={styles.mobinoText}>
            موبینو
          </Link>
          <span className={styles.slash}>/</span>
          <Link to="" className={styles.phoneText}>
            محصولات اپل
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
              {productsDisplayer(appleProducts)}
            </div>

            {/* // ?_________________________________________ */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppleProductsPage;
