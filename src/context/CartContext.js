import { createContext, useState,useEffect, useLayoutEffect} from "react";

const CartContext = createContext();





const CartProvider = ({children}) => {

    const [productos,setProductos] = useState([]);


//Futura Incorporación localstorage
    // useEffect(()=>{
    //     console.log("hello mounting localstorage feature");
    //     return () =>{
    //         localStorage.setItem("carrito",JSON.stringify(productos))
    //     }
        
    //     })

    
    const addCart = (product,counter) => {
        product["buying"] = counter;
        if(idExists(product.id)){
        let index = productos.indexOf( productos.find(function(item){return item.id === product.id}))
            console.log(index)
            productos.splice(index,1);
            setProductos(productos => [...productos,product])
            } else {
            setProductos(productos => [...productos,product])}
            
    }


    function clearCart(){
        setProductos([]);
        console.log("Carrito vaciado correctamente")
    }

    function idExists(id){
        return productos.some(function(el){
            return el.id === id;
        });
    }

    console.log("Productos en carrito: ",productos)
    return(
        <>
        <CartContext.Provider value={{setProductos,productos,addCart,clearCart}}>
        {children}
        </CartContext.Provider>

        </>
    )
}

export default CartProvider;
export {CartContext};