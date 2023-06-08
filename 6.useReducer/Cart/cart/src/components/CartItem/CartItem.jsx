import "./cartItem.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useGlobalContext } from "../../context";

const CartItem = ({ id, title, amount, price, img }) => {
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <article className="item">
      <div className="item-info">
        <img src={img} alt={title} />
        <div className="item-desc">
          <h5>{title}</h5>
          <p>$ {price}</p>
          <button className="remove-btn" onClick={() => remove(id)}>
            remove
          </button>
        </div>
      </div>

      <div className="btn-container">
        <button className="btn" onClick={() => increase(id)}>
          <MdOutlineKeyboardArrowUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="btn" onClick={() => decrease(id)}>
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
