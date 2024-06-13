import React from "react";
import Product from "./Product";

const Products_list = () => {
  let products = [
    {
      id: 1,
      name: "Apple",
      price: 20000,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3D2_gqytWgOCZ1IuCuPkaOBe1nVDG1QHV04ZF7NDfmAjNNOMwMXExIP66SnatIHGWfc&usqp=CAU",
    },
    {
      id: 2,
      name: "Sumsung M51",
      price: 34000,
      url: "https://rukminim2.flixcart.com/image/850/1000/kgzg8sw0/mobile/p/t/e/samsung-galaxy-m51-sm-m515fzbeins-original-imafx3c8fhjh4sra.jpeg?q=20&crop=false",
    },
    {
      id: 3,
      name: "One +",
      price: 40000,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEqjyoSTVZj4AXqzVK08xeGmRzNr-L3JC7EA&s",
    },
    {
      id: 4,
      name: "Iphone",
      price: 30000,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkqBIv4_Dj5CXzO0OwDy-m5FMwOI3ov4s4g&s",
    },
  ];
  return (
    <div>
      <div className="products">
        {products.map((product) => {
          return (
            <Product
              name={product.name}
              price={product.price}
              url={product.url}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products_list;
