import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import styles from "./auth.module.css";
import { useLayoutEffect } from "react";
import Lottie from "lottie-react";
import Using_phone from "../../lotties/using_phone.json";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("ایمیل باید معتبر باشد")
    .required("ایمیل را وارد کنید"),
});

const AuthPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log("on submit", values);
    },
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  const emailError = formik.errors.email && formik.touched.email;

  return (
    <div className={styles.container}>
      <div className={styles.backgroundColors}>
        <div className={styles.whiteContainer}></div>
        <div className={styles.coloredContainer}></div>
      </div>
      <div className={styles.containerControll}>
        <Link to="/" className={styles.mobino}>
          موبینو
        </Link>
        <div className={styles.loginSignupText}>ورود | ثبت نام</div>
        <div className={styles.helloText}>سلام !</div>

        <form
          onSubmit={formik.handleSubmit}
          className={styles.authForm}
          action=""
        >
          <label className={styles.inputLable}>
            لطفا ایمیل خود را وارد کنید
          </label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.emailInput}
            type="text"
          />

          {emailError && (
            <div className={styles.formErrorContainer}>
              {formik.errors.email}
            </div>
          )}
          <button type="submit" disabled={!formik.isValid}>
            ورود
          </button>
        </form>
      </div>

      <div className={styles.asideInfo}>
        <div className={styles.asideInfoHeader}>
          <section>
            <div>1</div>
            <div>احراز هویت</div>
          </section>
          <section>
            <div>2</div>
            <div>تکمیل اطلاعات</div>
          </section>
          <section>
            <div>3</div>
            <div>ثبت سفارش</div>
          </section>
          <div className={styles.firstCross}></div>
          <div className={styles.secondCross}></div>
        </div>

        <div className={styles.animationContainer}>
          {/* <Lottie animationData={Login} /> */}
          <Lottie animationData={Using_phone} />
        </div>

        <div className={styles.asideInfoFooter}>
          <p>
            فروشگاه اینترنتی <span>موبینو‌</span> یک مرجع جامع با قیمت‌های به
            روز و ارزان
          </p>
          <Link to="/products">مشاهده محصولات</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
