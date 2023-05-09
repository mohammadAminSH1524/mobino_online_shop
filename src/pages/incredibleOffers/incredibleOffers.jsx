import styles from "./incredibleOffers.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { discountedProducts } from "../../components/functions/functions";

import { productsDisplayer } from "../../components/functions/productsDisplayer/productsDisplayer";


import SortComponent from "../../components/sort/sortComponent";
import FilterComponet from "../../components/filter/filterComponent";
import { getAsyncProducts } from "../../features/sort/sort";

const IncredibleOffers = () => {
  const { value, error, loading, products } = useSelector(
    (state) => state.sort
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  const _discountedProducts = discountedProducts(products);

  return (
    <div className={styles.container}>
      <div className={styles.containerControll}>
        <section className={styles.routeAddress}>
          <Link to="/" className={styles.mobinoText}>
            موبینو
          </Link>

          <span className={styles.slash}>/</span>

          <Link to="" className={styles.phoneText}>
            فروش ویژه موبینو
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
              {productsDisplayer(_discountedProducts, false)}
            </div>

            {/* // ?_________________________________________ */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default IncredibleOffers;
