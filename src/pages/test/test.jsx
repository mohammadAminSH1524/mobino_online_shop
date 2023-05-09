import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import styles from "./test.module.css";
import { persianConverter } from "../../components/functions/functions";
import {
  sorting,
  filtering,
  cart,
  addToCart,
  getAsyncProducts,
} from "../../features/sort/sort";

const TestPage = () => {
  const { value, error, loading, products, cart } = useSelector(
    (state) => state.sort
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  if (loading) return <div className={styles.container}>صبر کنید</div>;
  if (error)
    return (
      <div className={styles.container}>گرفتن اطلاعات با مشکل مواجه شد</div>
    );

  return (
    <div className={styles.container}>
      <a href="">sssadasdas</a>
      {products.map((product, index) => {
        return (
          <div className={styles.TestContainer} key={index}>
            <span>{product.id}:</span>
            <span>{product.color}</span>

            <button
              onClick={() => dispatch(addToCart(product.id))}
              className={styles.Btn}
            >
              test
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TestPage;
