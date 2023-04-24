import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Cart from "../../pages/Cart/Cart";
import SingleProduct from '../../pages/Product/SingleProduct'
function AllRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/singleproduct/:id" element={<SingleProduct/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<h1 style={{margin:'200px'}}>No such Page Exist</h1>} />
    </Routes>
   
    </>
  );
}

export default AllRoutes;
