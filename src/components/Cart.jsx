
const Cart = ( {cart, emptyCart} ) => {

const total = cart.reduce( (acc,item) =>  acc + item.price, 0)

// kartın içerisindeki tüm ürünleri döner item.price ile fiyatı verirsin
// 0,acc'nin başlangıç değeri. item.price + 0 = acc ve sonrasında acc + item.price = acc

if (cart.length === 0 ) return;
// if çalışırsa Aşağıya inmiyor
// return altına(html kısmına)yazarsan yorum kodlarını{/*  */}alman gerekir
  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      {/* Padding bazı durumlarda content den çalabilir */}
      <h2 className="text-2x1 font-semibold mb-4"></h2>
      <ul>
         {/* //! App.jsx kısmında ilk products kısmı oluyor ordan {cart} ı */}
        {/* //! tekrardan işleme alıyoruz ve map leyip özellikerini kullanıyoruz */}
        {cart.map( (item) => (
        <li className="mt-2 flex justify-between">
          <span>{item.name}</span>
          <span>{item.price} TL</span>
        </li>
          ))
        }
      </ul>
    
      <hr className="my-4" />

      <p className="font-semibold text-lg">Toplam:
        {total} TL</p>
        <button className="mt-3 p-2 h-10
        bg-red-500 hover:bg-red-600  text-gray-100 
        rounded-lg w-full ease-in duration-200"
        onClick={emptyCart}>
          Sepeti Boşalt
        </button>
    </div>
  );
};

export default Cart;
