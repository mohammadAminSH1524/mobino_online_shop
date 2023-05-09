import { Route, Routes } from "react-router-dom";
import styles from "./layout.module.css";
import HomePage from "../pages/home/homePage";
import CartPage from "../pages/cart/cartPage";
import ProductsPage from "../pages/products/productsPage";
import NotfoundPage from "../pages/notFound/notFound";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import TestPage from "../pages/test/test";
import IncredibleOffers from "../pages/incredibleOffers/incredibleOffers";
import SingleProduct from "../pages/singleProduct/singleProduct";
import ApplePage from "../pages/appleProducts/appleProducts";
import SamsungPage from "../pages/samsungProducts/samsungProducts";
import XiaomiPage from "../pages/xiaomiProducts/xiaomiProducts";
import AuthPage from "../pages/auth/auth";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.routesContainer}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/incredible-offers" element={<IncredibleOffers />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:product" element={<SingleProduct />} />
          <Route path="/apple-products" element={<ApplePage />} />
          <Route path="/samsung-products" element={<SamsungPage />} />      
          <Route path="/xiaomi-products" element={<XiaomiPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
