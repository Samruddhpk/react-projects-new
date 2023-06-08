## Notes

## Steps

## Basic - for all big/medium projects

1. Create all necessary components and pages - useReducer(reducers),contextAPI
2. Keep all imports in one file for components and pages - index.js and export them in App.js
3. Setup react router in App.js and check for every route working.

### Components

# Navbar

1. two layouts - mobile and web
2. nav : height,flex & nav-center : w90vw,m0auto,maxwidth1120px.
3. always start with mobile first approach
4. logo and toggle button (max:992px) & nav-links - by default display:none
5. min(992px) above -> nav-links:flex and toggle-btn:none.
6. Checkout link only to be displayed if user in logged in.

# Cart button

1. Cart buttons has to be displayed if use is in big screens or if in small screen it should be in sidebar
2. One cart icon and circle placed with amoutn of items and login button.

# Footer

1. Setup &copy; and for date - {new Date().getFullYear()}

# Sidebar

1. create a sidebar with translateX(-100%)
2. create initialState object for useReducer and create function and dispatch action to reducer file from productsContext
3. define functions for openSidebar and closeSidebar in reducer
4. we want to close sidebar on click of links also so , define event on both links and cartButton - using useProductsContext
5. Involved files - ProductsContext -> productsReducer -> Navbar(openSidebar) -> Sidebar(isSidebarOpen,closeSidebar) -> CartButtons (closeSidebar)

# Error Page

1. using style of page-100 -> min-height:calc(100vh - 10rem) (5-navbar & 5-footer)

# About page and Checkout page

1. PageHero component has to get prop - "title" from both about and checkout pages to display 'Home / About'

# Home page

1. bring all components - hero,featured products,services,contact
2. setup hero component - 2 column layout -> two images,before styling and para
3. Services component
4. Contact component - 'formSpree , mailChimp'
5. Featured Products - use try/catch in context.jsx
   1. create fetchProducts function that takes url as parameter - coz, to use this in two places 1-featured products component and Products List component/page & useEffect to call once.
   2. We need more state values in initial State object - products_begin,success (payload),error & dispatch them

# featured products in Home page

1. get all states - loading,error,featured_products from useProductsContext()
2. woriking on two files - featuredProducts and Product components.
3. display title and map over fetauredProducts - and slice it to 3. and return Product component
4. destructure all props and display them in Product Component.

# format price - utils/helpers/formatPrice()

1. using normal calculation for price is risk taking as payment services(stripe) wont work properly and its matter of "MONEY".
2. so use javascript internationilization to format price.
3. prefer which country, what is currency type etc.
4. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat - mdn docs
5. export const formatPrice = (number) => {
   return new Intl.NumberFormat("en-IN", {
   style: "currency",
   currency: "INR",
   }).format(number / 100); // to get exact cents(decimal) value };

# Single Product Page

1. initial State object - single_product_loading: false,
   single_product_error: false,
   single_product: {}
2. create fetchSingleProduct() - and dispatch it. (uses different api)
3. create reducers.
4. create loading and error
5. in singleProductPage - call fetchSingleProduct() (useEffect) with url and id (useParams())
6. useHistory() & redirects - are used for page redirecting. here we using useHistory().push('/') (home page)
7. return basic - render needed data.
8. Product images
   1. array with some images and main image should be displayed and once clicked on other images ,that should become main image.
   2. get the state of images as empty in prop {images=[{url:''}]}, then after loading state will be changed to images
   3. set state main - useState(images[0])
   4. render images in gallery container and onClicking on them set - setMain(images[index])
   5. to show active image - add className -> ${images.url===main.url? 'active' : null}
9. Stars component -
   1. manual approach -> ternery approach
   2. array.from approach (best logic)
10. Add to Cart - colors
    1. get colors array from product prop and provide state var
    2. map over them and render button - onClick(setMainColor())
    3. if mainColor and Color == true then <FaCheck/>
11. AmountButtons - seperate components
    1. setup two functions increase and decrease and amount state value
    2. check for stock value when increasing an decreasing.

<!-- FILTERS -->

## Filters Context

1. Setup context ->
   1. Initial State : all_products: [],filtered_products: [] , grid_view:false
   2. get products from productsContext. and dispatch LOAD_PRODUCTS action.send value = {...state}
   3. setup in reducer.
2. Setup Grid View ->
   1. ProductsList.js(component) - get products from filter_context and send it to Grid_View. and setup (products<1)return no products found.
   2. GridView.js(component) - map through products and render them in Product component(Already set before).
3. List View ->
   1. ProductsList.js - set condition if(grid_view===false) return List_View
   2. Setup List-View component (get and render data)

# Sort Component

1. Basic setup
   1. Sort.js - get products & grid_view state - set up buttons` class 'active'
   2. display products.length - <p>
   3. and form with label and select options.
2. View Buttons
   1. setup functions setGridView and setListView.
   2. attach to onClick event handlers to both buttons.
3. Controlled Input (onChange, value both on select)
   1. filtersContext.js - setup state -> sort:"default value" and updateSort function which takes e.target.value and dispatch({type:UPDATE_SORT, payload:value})
   2. pass them to reducer and set function. return { ...state, sort: action.payload };
   3. "KEEP ON CHECKING IN DEV_TOOLS - COMPONENTS"
4. Sort Functionality - select option
   1.filterContext.js - set useEffect which takes when products and state.sort changes and dispatch {type:SORT_PRODUCTS} (DONT SEN PAYLOAD) 2. recucer.js - setup SORT_PRODUCTS functionality (price(low,high),name(a-z))

# Filters

(DONT FORGET "name" attribute)

1. Filters - Default Values
   1. filtersContext.js - set filters object as initialState
   2. set maxPrice in LOAD_PRODUCTS reducer and while returning set max_price and price as new maxPrice
2. Filters - Text Input
   1. filterContext - set updateFilters & clearFilters function and send them
   2. components/filters.js - get filters object(whole object) and functions.
   3. make form and controlled input.
3. Filters - Unique Values - (categories,colors,company)
   1. utils/helper/uniqueValues function is present. call it in Filters.js
   2. setup unique values function as defautl function which takes (data,type)
   3. color property has array of arrays in data so flatten it. -> unique.flat()
4. Filters - Categories
   1. Filters.js - render all categories. (button)
   2. add active class to button and onClick - updateFilters
   3. check filterProducts function calling itself or not each change of category.
   4. filterContext.js -> updateFilters function -> " if (name === "category") { value = e.target.textContent; }" - cannot get value from button like we did in search input (target.value) so we need textContent.
5. Filters - Companies
   1. same idea as above - select and options
6. Filters - Colors
   1. Same as above but, color has to be set in data-attribute
   2. filterCOntext.js/updateFilters - if(name="color") return e.target.dataset.color
7. Filters - Price
   1. input - range -> set min and max value , onChange{updateFilters}
   2. in range we get value as number so -> updateFilters function-> if(name==="price") value= Number(value)
8. Filters - Free shipping
   1. input - checkbox , checked={shipping} name & id="shipping",
   2. updateFilters function - value=e.target.checked - checked returns true/false.
9. Filters - Clear Filters functionality
   1. setup button - clear filters
   2. filterReducer/clear_filters function
      1. bring initialState object of filters
      2. copy all previous state - {...state}
      3. set all props leaving - "max_price,min_price,price" to default
      4. remove max_price & min_price from object
      5. set price:state.filters.max_price (to show max_price as default price)

# FILTER FUNCTIONALITY - SETTING PROCUCTS AS PER CHANGE OF FILTERS

1. Filters Functionality Setup
   1. Already dispatched an action in useEffect() in filtersContext(), whenever there is any change of filters, then it should be calling filter_products - type.
   2. filter_reducer - setup filter_products function
      1. get all_products and all filter values object from state and state.filters
      2. we need an alternative array which has to be changed everytime any filter is applied, so
         declare - temp_products = [...all_products]
      3. then start with filter one by one - {text,price,colors etc..}
      4. text - if (text) {
         temp_Products = temp_Products.filter((product) => {
         return product.name.toLowerCase().startsWith(text);
         });
         }
      5. category - if (category !== "all") {
         temp_Products = temp_Products.filters(
         (product) => product.category === category
         )}
      6. refer reducer for others

#### CART FUNCTIONALITY

- since the stock of products are huge, have to maintain all the data user checks while adding to cart

1. Cart Context
   1. Setup addToCart function - which accepts { id, color, amount, product } as params and setup in reducer too. refer cartReducer.
   2. components/AddToCart - onclick of Add to cart button
   3. removeItem,toggleAmount and clearCart functions.
2. Setup cartPage page
   1. cartPage do have - CartContent component
3. Local Storage - cartContext
   1. everytime page loads, content of cart should be present in localstorage
   2. so create useEffect((localStorage.setItem('cart',JSON.stringify(state.cart))),[state.cart])
   3. create getLocalStorage function to get items from local Storage, and call it in initailState cart:getLocalStorage()
4. Cart Content component
   - setup it
5. Cart column setup
6. Cart Totals Setup
7. Cart Item Setup
8. setup removeItem and clear_cart functions - check for localStorage - should be less/empty
9. Toggle amount same as Add to cart functionality in Single Prodcuct page
10. Setup calculate totals
    1. dispatch count_totals - in useEffect
    2. components/cartButton - const {total_items} = useCartContext() & set {total_items} to cart_value
    3. setup function in reducer

# Auth0

1. Login/SignUp
2. Select Platform for app - React
3. give dummy user credentials, custom logo, gmail or any other services
4. check connection by logging in
5. get domain and client id
   domain - "dev-qkk8rgjv0xohefn0.us.auth0.com"
   client-id - "0fYxLasGbvIFZpY7GlmrXt2lm4JLDn59"
6. Setup Callback url - localhost:3000 - just for now - later have to set it to netlify or any other service
7. Setup - userContext
   1. auth0 -> provides hook 'useAuth0' - import it
   2. index.js -> <Auth0Provider
      domain="dev-qkk8rgjv0xohefn0.us.auth0.com"
      clientId="0fYxLasGbvIFZpY7GlmrXt2lm4JLDn59"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
      >   <UserProvider>
   3. destructure useAuth0 hook - {isAuthenticated,loginWithRedirect,logout,user,isLoading} -> must needed functions
   4. useEffect(()=>{clg(user,isAuthenticated,isLoading)},[isAuthenticated])
   5. State value - to check user logged in or not. - const[myUser,setMyUser] = useState(null)
   6. change useEffect - if(isAuthenticated){setMyUser(user)} else {setMyUser(false)}
8. components/CartButtons.js -
   1. get loginWithRedirect & logout functions from useContext
   2. setup two buttons - login & logout in navbar(already there)
   3. login onClick - loginWithRedirect & logout - logout({ returnTo: window.location.origin }) - (default function calls by auth0)
   4. toggle login/logout buttons - myUser ? <Logout> : <Login>
      Note: index.js - if any credentials incorrect - clienId/domain - results "401"
9. Hide Checkout (Navbar - Sidebar - Cart Total) - If user is logged in,then only show checkout page
   1. Navbar.js
      1. get myUser and display checkout only when myUser is available
   2. Sidebar.js - same
   3. Cart total - myUser ? <checkout> : <login>
10. Private Route - /checkout - protect route in address bar
    1. app.js - <PrivateRoute path="/checkout"><checkout></PrivateRoute>
    2. PrivateRoute.js -
       1. get children and ...rest of the info in params - ({children,...rest}) - ('rest' can by any name,rest parameter it is)
       2. return (
          <Route {...rest} render={()=>{return myUser ? children : <Redirect to="/"></Redirect>}}>
          </Route>
          )
          - ...rest coming and we sending it in children - <checkout>
          - render is method available in react-router - setting it conditionally
          - if user is present then children , if not - Redirect to home page
11. AuthWrapper - app loading based on context and resulting in bug with Auth0. so do this:
    1. update PrivateRoute - const{user} = useAuth0() - update myUser with user
    2. update useEffect() - setMyUser(user),[user]
    3. create AuthWrapper.js and import in /pages/index.js & app.js & Wrap all in AuthWrapper
    4. thats it. app can load just perfect.

# Stripe and Netlify

1. Setup

# Stripe - setup

1. Login/Create account
2. Developers - Apps - View Docs - Payments - Accept onlien payments - custom flow (react & node)

# Netlify - Setup

1. Project should be without any error , fix them if any before pushing it to production
2. It was recommended before, to install netlify cli globally, but not necessary now, just install the package as dev-dependency -> "npm install netlify-cli -D"
3. then can run - "netlify dev" or "ntl dev"
4. App may hang in there, because of Auth0 - callback url (just mentioned localHost:3000) - add on more url localhost:8888 (netlify)

## Netflify Functions

# First Netlify Function

1. create "functions" folder in the root directory
2. create "netlify.toml" file
   1. testing code
      - [build]
      - functions = "./functions"
3. create hello.js in functions folder (testing file code)
   1. exports.handler = async function(event,context){
      return{
      statusCode: 200,
      body : "Hello world",
      } }
   2. so this function would be running when called - "domain//.netlify/functions/hello"

## Stripe Checkout Page

1. Create /components/StripeCheckOutPage
2. create it as a component - contains checkOutForm and stripeChekcout functions - wrap checkOutForm in stripeCheckout inside Wrapper and export default StripeCheckout
3. import in index.js
4. CheckOutPage.js
   1. import StripeCheckout and cartContext & Link
   2. check if empty show fill it button else StripeChekcout component
5. CartButtons.js - if logged out clear cart items
   1. onClick of logout button - run - clearCart()

## Stripe Checkout Imports

1. create .env file and insert all secret keys (process.env - as it is CRA)
2. need to import all the necessary packages present in stripe docs - stripeCheckoutPage.js
<!-- import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { useHistory } from "react-router-dom"; -->
3. store stripe public key in as variable called "promise" -
<!-- const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY); -->
4. wrap checkoutForm inside <Elements/>
<!-- <Wrapper>
  <Elements stripe={promise}>
    <CheckoutForm />
  </Elements>
</Wrapper> -->

## Stripe State variables

1. import cardStyle code from docs and paste n checkoutform
2. define state var

## Stripe basic return

1. follow classNames provided by stripe
2. create functions - ref - stripeCheckoutPage.js

# Create Payment Setup

1. setup functions in StripeCheckout and functions/create_payment_intent

<!-- NETLIFY LINK -->

https://comfystore-testing.netlify.app
