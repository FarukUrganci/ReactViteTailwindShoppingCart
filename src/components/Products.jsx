import ProductsItem from "./ProductsItem";
import productData from "../productData"

const Products = (props) => {

// console.log(props); cart,setCart

    return(
        <div className="grid grid-cols-3 gap-5 mb-8">
        {
            // productData.map( () => (
            //     {productData} + ` 1,` - sadece "1" yazsak onu yazardı
            //     //! Map fonk da üste yazılan şeyi ekrana basar
            //     //! 3tane objesi veya array old. için 3 defa yazdı
            //     //! Unutma producData yı - MAP liyorsun -.
            // ))
                
            productData.map( (product) => ( 
                <ProductsItem product={product} key={product.id}
                cart={props.cart} setCart={props.setCart} />
                //?Her bir dönen product ı prop olarak ProducItem a geçirdik (set,setCart = props şeklinde aldık)
                //?Buradaki amaç producData yı map leyerek özelliklerini kullanmak
            ))
        }  
        </div>
    )
} 

export default Products;