import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartBtnActions } from "../../store/cart-btn";

const CartButton = (props) => {
  const itemQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  function handleCartBtn() {
    dispatch(cartBtnActions.toggle());
  }

  return (
    <button className={classes.button} onClick={handleCartBtn}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;
