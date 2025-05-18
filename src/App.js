import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect } from "react";
import { receiveCart, sendCart } from "./store/cart";

let initialRun = true;

function App() {
  const cartOpen = useSelector((state) => state.cartBtn.isCartOpen);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveCart());
  }, [dispatch]);

  useEffect(() => {
    if (initialRun) {
      initialRun = false;
      return;
    }

    if (cart.isChanged) {
      dispatch(sendCart(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.description}
        />
      )}
      <Layout>
        {cartOpen && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
