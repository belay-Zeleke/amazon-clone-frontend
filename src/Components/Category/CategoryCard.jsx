import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  // console.log(data.title)
  return (
    <div className={classes.Category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2 className={classes.Category__tittle}>{data?.title} </h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
