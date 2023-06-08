import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    // its in array, so spread it.
    maxPrice = Math.max(...maxPrice);
    // console.log(maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let temp_Products = [...filtered_products];

    if (sort === "price-lowest") {
      temp_Products = temp_Products.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      temp_Products = temp_Products.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      temp_Products = temp_Products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      temp_Products = temp_Products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: temp_Products };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    // dynamic property setting
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_PRODUCTS) {
    // console.log("filtering products");

    const { all_products } = state;
    const { text, price, color, category, company, shipping } = state.filters;

    let temp_Products = [...all_products];
    // text filter - search box input
    if (text) {
      temp_Products = temp_Products.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    // category
    if (category !== "all") {
      temp_Products = temp_Products.filter(
        (product) => product.category === category
      );
    }

    //company
    if (company !== "all") {
      temp_Products = temp_Products.filter(
        (product) => product.company === company
      );
    }

    //colors - it is an array so
    if (color !== "all") {
      temp_Products = temp_Products.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }

    //shipping
    if (shipping) {
      temp_Products = temp_Products.filter(
        (product) => product.shipping === true
      );
    }

    //price - range
    temp_Products = temp_Products.filter((product) => product.price <= price);

    return { ...state, filtered_products: temp_Products };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
