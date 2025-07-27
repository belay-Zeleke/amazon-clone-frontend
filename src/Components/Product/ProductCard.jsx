import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../DataProvider/DataProvider";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const [state, dispatch] = useContext(DataContext);
  // console.log(state)

  if (!product) return null;
  if (!product || !product.rating) return null;

  const { image, title, id, rating, price, description } = product;
  // console.log(title)

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        title,
        price,
        rating,
        description,
        image,
      },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      } `}
    >
      <Link to={`products/${id}`}>
        <img src={image} alt="" />
      </Link>

      <div>
        <h3> {title} </h3>
        {renderDesc && <div style={{ maxWidth: "60%" }}> {description} </div>}
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small> {rating.count} </small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add TO Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
