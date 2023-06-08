// import
import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "./reducer.js";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions.js";
import cartItems from "./data";
import { getTotals } from "./utils.js";

const url = "https://www.course-api.com/react-useReducer-cart-project";
// createContext

const AppContext = createContext();

// initialState
const initialState = {
  loading: false,
  //  cartItems.map((item) => [item.id, item])
  cart: new Map(),
};

// app provider

export const AppProvider = ({ children }) => {
  // state
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);
  //   send
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom global hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
