import Cart from "./Cart";
import CartIcon from "./CartIcon";

const Header = ({cart}) => {
  return ( 
    <div className="flex justify-between items-center mb-6">
      <h1 className="capitalize font-bold text-lg">
        react ve Tailwid css sepet Uygulaması
      </h1>
    <CartIcon cart={cart} />
    </div>
  );
};
//?Yukarıya prop yazarsan ve <CartIcon cart={props.cart} yazarsan çalışır
export default Header ;
