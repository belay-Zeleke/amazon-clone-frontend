import {React, useEffect, useState} from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { productUrl } from "../../Api/endPoints";
import ProductCard from './../../Components/Product/ProductCard';

function Results() {
  const [ results, setResults] = useState([])
  const { categoryName } = useParams();
  // console.log(categoryName);
  useEffect(() => {
  axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
      // console.log(res)
      setResults(res.data)
    }).catch((err) => {
  console.log(err)
    })
  
    }, []);

  return <LayOut>

     <section>
        <h1 style={{ padding: "30px" }}> Results</h1>
        <h3 style={{ padding: "30px" }}>Category / {categoryName}</h3>
        <hr />
        <div className={classes.products_container}>
        {results?.map((Product) => (
            // console.log(Product)
            <ProductCard
              key={Product.id}
              product={Product}
              renderAdd={true}
            
            />
          ))}
          ;
        </div>
      </section>
  
  </LayOut>;
}

export default Results;
   