import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartOpen = useSelector((state) => state.cartBtn.isCartOpen);

  return (
    <Layout>
      {cartOpen && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
