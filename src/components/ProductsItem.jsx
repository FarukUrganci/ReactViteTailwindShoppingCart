const ProductsItem = ({product ,cart,setCart}) => {
const findProduct = cart.find((item) => item.id === product.id);
const addToCart = ( product ) => {
  // setCart([...cart, product]) //* cart ın içindeki tüm değerleri al yeni ürün olarak produc ı al
  setCart( (prevState) => [...prevState, product] ); //todo: Önceki tüm değerleri al, yanındeki değerleri gönder
  //* Aynı İşlem --- Adını prevState şeklinde yazmana gerek yok
}
// console.log(product);
console.log(cart); //todo: Todo İle Yazan kısımda açıklıyor

  return (
    <div className="border-2 p-4 m-2 shadow-xl bg-gray-200 rounded-2xl">
      <div className="p-2">
        <img 
          className="w-full h-48"
          src={product.src}
          alt="image"
        />
        <h2 className="text-2xl font-semibold my-2"> {product.name} </h2>
        <p className="text-gray-500 my-2">{product.price}</p>

        <button className={`ease-in duration-200 bg-blue-500 hover:bg-blue-600
         text-gray-100 rounded-xl
          px-4 w-full h-[40px] ${findProduct && "opacity-50 cursor-no-drop"}`} onClick={ () => addToCart(product)} 
          disabled={findProduct}
          >
          Sepete Ekle
        </button>

      </div>
    </div>
  );
};

export default ProductsItem;
