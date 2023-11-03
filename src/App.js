import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [singleproduct, setSingleProduct ] = useState([]);

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setSingleProduct(json));
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setProducts(json));
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => setCategories(json));
  fetch("https://fakestoreapi.com/products/category/jewelery")
    .then((res) => res.json())
    .then((json) => setJewelery(json));
  return (
    <>
      <div>
        <ul>
          <div>
          <li>{singleproduct.id}</li>
          <li>{singleproduct.title}</li>
          <li>{singleproduct.price}</li>
          <li>{singleproduct.description}</li>
          <img src={singleproduct.image} style={{height:"100px"}}/>

          </div>
          
        </ul>
        <ul>
          {jewelery.map((joy) =>(
            <div style={{margin: "30px"}}>
            <li>Id:{joy.id}</li>
            <li>Title:{joy.title}</li>
            <li>Price:{joy.price}</li>
            <li>Description:{joy.description}</li>
            <img src={joy.image} style={{height:"100px"}}/>
            </div>
          ))}
        </ul>
        <ul>
          {products.map((product) => (
            <div style={{ margin: "50px" }}>
              <li>Title:{product.title}</li>
              <li>Price:{product.price}</li>
              <li>Id:{product.id}</li>
              <li>Description:{product.description}</li>
            </div>
          ))}
        </ul>
        <ul>
          {categories.map((category) => (
            <li>{category}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
