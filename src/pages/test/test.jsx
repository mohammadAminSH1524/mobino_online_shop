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
  const { value,  loading, products, cart } = useSelector(
    (state) => state.sort
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAsyncProducts());
  }, []);

  if (loading) return <div className={styles.container}>صبر کنید</div>;
 

  return (
    <div className={styles.container}>
     
      {products.map((product, index) => {
        return (
          <div className={styles.TestContainer} key={index}>
            <span>{product.id}:</span>
            <div>{product.price}</div>
            <span>{product.title}</span>

            
          </div>
        );
      })}
    </div>
  );
};

export default TestPage;
