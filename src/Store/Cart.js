import Header from "./Store/Header";
import Body from "./Store/Body";
import { Provider } from "react-redux";
import appStore from "./Store/appStore";

const Cart = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>
  );
};

export default Cart;
