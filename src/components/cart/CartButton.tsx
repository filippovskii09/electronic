import { FC } from "react";
import "./cart.css";
import CartIcon from "../icons/CartIcon";

const CarButtont: FC = () => {
  return (
    <div className="cart">
      <button className="w-8 h-8 flex items-center justify-center box-content header-action relative">
        <CartIcon />
      </button>
    </div>
  );
};

export default CarButtont;
