import { FaCartPlus } from "react-icons/fa";
import "./navbar.scss";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3>UseReducer</h3>
        <div className="cart-container">
          <button className="cart-btn">
            <FaCartPlus />
          </button>
          <div className="cart-amount">{totalAmount}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
