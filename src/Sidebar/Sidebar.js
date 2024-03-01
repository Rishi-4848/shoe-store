import React from 'react';
import "./Sidebar.css";
import { IoMdCart } from "react-icons/io";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors"

const Sidebar = ({handlechange}) => {
  return (
    <>
     <section className="sidebar">
      <div className="logo-container">
        <h1> <IoMdCart/></h1>
      </div>
      <div className='filter-section'>
      <Category handlechange={handlechange}/>
      <Price handlechange={handlechange}/>
      <Colors handlechange={handlechange}/>
      </div>
     </section>
    </>
  );
}

export default Sidebar;
