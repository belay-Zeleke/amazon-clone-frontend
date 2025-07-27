import React from "react";
import { categoryInfos } from "./categoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  //  console.log(infos.title)
  return (
    <section className={classes.Category__Container}>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} />
      ))}
    </section>
  );
}

export default Category;
