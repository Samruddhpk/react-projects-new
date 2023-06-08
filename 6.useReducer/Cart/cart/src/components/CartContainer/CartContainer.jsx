import cartItems from "../../data";
import CartItem from "../CartItem/CartItem";
import "./cartContainer.scss";
import { useGlobalContext } from "../../context";

const CartContainer = () => {
  const { cart, clearCart, totalCost } = useGlobalContext();
  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <div className="empty-bag">
        <h2>Your bag</h2>
        <h4>is currently empty</h4>
      </div>
    );
  }
  return (
    <section className="cartContainer">
      <h3>Your bag</h3>
      {cartArray.map((cartItem) => {
        const [id, item] = cartItem;
        // console.log(cartItem);
        return <CartItem key={id} {...item} />;
      })}
      <hr />
      <div className="total-container">
        <h5>Total</h5>
        <h4 className="total">$ {totalCost.toFixed(2)}</h4>
      </div>

      <button className="clear-btn" onClick={clearCart}>
        clear cart
      </button>
    </section>
  );
};

export default CartContainer;
