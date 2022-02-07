import React from "react";
import Product from "./Product";
import "./productList.css";
import {products} from '../data'

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire. It's Mw</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam
          quod, iste ab maxime asperiores ea neque. Sint itaque similique
          impedit alias voluptatem porro? Beatae earum mollitia dicta fugit
          distinctio?
        </p>
      </div>
      <div className="pl-list">
          {
              products.map((items)=>{
                  return <Product key={items.id} link={items.link} img={items.img}/>
              })
          }
      </div>
    </div>
  );
};

export default ProductList;
