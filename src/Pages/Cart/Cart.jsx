import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { Link } from "react-router-dom";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Type } from "../../Utility/action.type";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_left}>
          <h2>Hello, {user?.name || "Guest"}</h2>
          <h3>Your Shopping Basket</h3>
          <hr />

          {basket.length === 0 ? (
            <p className={classes.empty}>Oops! Your cart is empty.</p>
          ) : (
            basket.map((item, i) => (
              <div key={i} className={classes.cart_item}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.qty_controls}>
                  <button onClick={() => increment(item)}>
                    <IoIosArrowUp />
                  </button>
                  <span>{item.amount}</span>
                  <button onClick={() => decrement(item.id)}>
                    <IoIosArrowDown />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {basket.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} items):</p>
              <CurrencyFormat amount={total} />
            </div>
            <label className={classes.gift}>
              <input type="checkbox" />
              <span>This order contains a gift</span>
            </label>
            <Link to="/payments" className={classes.checkout_btn}>
              Proceed to Checkout
            </Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
