import { useState } from "react";
import styles from "./filterComponet.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { filtering } from "../../features/sort/sort";
import { Link, useLocation } from "react-router-dom";

const FilterComponet = () => {
  const dispatch = useDispatch();

  const colorInfos = [
    {
      color: "green",
      colorImage:
        "https://dkstatics-public.digikala.com/digikala-static/e93523d755acd1851052687b30f231edea4cb9bc_1670664245.png",
      colorText: "سبز",
    },
    {
      color: "blue",
      colorImage:
        "https://dkstatics-public.digikala.com/digikala-static/53cd2901b76a741e9011ace2659b9f4c0e52f578_1670664279.png",
      colorText: "آبی",
    },
    {
      color: "white",
      colorImage:
        "https://dkstatics-public.digikala.com/digikala-static/a16c557a142f56435d8501e7fbf1d2c0cf93a615_1670664037.png",
      colorText: "سفید",
    },
    {
      color: "black",
      colorImage:
        "https://dkstatics-public.digikala.com/digikala-static/6b73478aca3fed39aafd08b3406536b5a1fcfbb1_1670663838.png",
      colorText: "مشکی",
    },
    {
      color: "gray",
      colorImage:
        "https://dkstatics-public.digikala.com/digikala-static/e3f34aeca4096bfb699fd8e1d19a632221599b8e_1670663944.png",
      colorText: "طوسی",
    },
    {
      color: "pink",
      colorImage:
        "https://dkstatics-public.digikala.com/digikala-static/82bb84f17b73bc116114c3d72d9fadaa6da3ea49_1670664327.png",
      colorText: "صورتی",
    },
    {
      color: "red",
      colorImage:
        "https://dkstatics-public.digikala.com/digikala-static/cb99d178c29f70ecd58b14390f685e2c5cf2b152_1670664354.png",
      colorText: "قرمز",
    },
    {
      color: "silver",
      colorImage:
        "https://dkstatics-public.digikala.com/digikala-static/cc3c51cc8a21764038bbcf381f538f40bc48e6a8_1670663991.png",
      colorText: "نقره ای",
    },
    {
      color: "purple",
      colorImage:
        "https://dkstatics-public.digikala.com/digikala-static/f275e126421d91ecdaaf0aa80310d3ac39510346_1670664302.png",
      colorText: "بنفش",
    },
  ];

  const availableFilterHandler = () => {
    setAvailableInput(!availableInput);
    dispatch(filtering("available"));
  };

  const pathname = useLocation().pathname;
  const spletedPathname = pathname.split("-")[0].split("/")[1];

  const _brandFilter = spletedPathname === "products" ? true : false;

  const [availableInput, setAvailableInput] = useState(true);
  const [brandFilter, setBrandFilter] = useState(true);
  const [colorFilter, setColorFilter] = useState(_brandFilter);

  return (
    <div className={styles.filtersContainer}>
      <span>فیلترها</span>

      {/* brand filter */}
      <section className={styles.filter}>
        <button
          className={styles.filterBtn}
          onClick={() => setBrandFilter(!brandFilter)}
        >
          <span className={styles.filterText}>برند</span>
          <span className={styles.plus}>
            {brandFilter ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </span>
        </button>

        {brandFilter ? (
          ""
        ) : (
          <div className={styles.brandsContainer}>
            <Link to="">
              <img
                onClick={() => dispatch(filtering("apple"))}
                src={require("../../assessts/images/logoImages/apple logo.webp")}
                alt="apple logo"
              />
            </Link>
            <Link to="">
              <img
                onClick={() => dispatch(filtering("samsung"))}
                src={require("../../assessts/images/logoImages/Samsung-Logo-2048x1158.png")}
                alt="samsung logo"
              />
            </Link>
            <Link to="">
              <img
                onClick={() => dispatch(filtering("xiaomi"))}
                src={require("../../assessts/images/logoImages/xia 2 logo.jpg")}
                alt="xiaomi logo"
              />
            </Link>
          </div>
        )}
      </section>

      {/* color filter */}
      <div className={styles.filter}>
        <button
          className={styles.filterBtn}
          onClick={() => setColorFilter(!colorFilter)}
        >
          <span className={styles.filterText}>رنگ</span>
          <span className={styles.plus}>
            {colorFilter ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </span>
        </button>

        {colorFilter ? (
          ""
        ) : (
          <div className={styles.colorsContainer}>
            {colorInfos.map((info, index) => {
              return (
                <button
                  onClick={() => dispatch(filtering(info.color))}
                  key={index}
                  className={styles.colorFilter}
                >
                  <div className={styles.colorFilterBox}>
                    <img
                      src={info.colorImage}
                      className={styles.innerColorFilterBox}
                    ></img>
                  </div>
                  <div className={styles.colorFilterText}>{info.colorText}</div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className={` ${styles.availableProductsFilter} ${styles.filter}`}>
        <button
          onClick={() => availableFilterHandler()}
          className={
            availableInput
              ? styles.availableFilterDisabled
              : styles.availableFilter
          }
        >
          <div></div>
        </button>
        <span>فقط کالا های موجود</span>
      </div>
    </div>
  );
};
export default FilterComponet;
