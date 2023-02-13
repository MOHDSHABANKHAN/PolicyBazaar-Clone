import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../productpage/Product";
import ProductDetails from "../productpage/ProductDetails";
import Cart from "../Cart/Cart";
import Payment from "../Cart/PaymentPage";
import OrderCompleted from "../Cart/OrderCompleted";
import Signup from "../Login/signup";
import Login from "../Login/login";
import HomePageGrid from "../../HomePageGrid/HomePageGrid";

function RoutesComp(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePageGrid  />} />
      <Route path="/products" element={<Product />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/ordercompleted" element={<OrderCompleted />} />
      <Route path="/Signup" element={ <Signup/>}/>
      <Route path="/Login" element={ <Login/>}/>
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default RoutesComp;
