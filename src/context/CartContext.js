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
            
            productos.splice(index,1);
            setProductos(productos => [...productos,product])
            } else {
            setProductos(productos => [...productos,product])}
    }


    function clearCart(){
        setProductos([]);
        console.log("Carrito vaciado correctamente")
    }


    const [cantWidget, setCantWidget] = useState(0);
    useEffect(()=>{
        const setWidget = () => {
            if(productos.length>0){
            let qtyBuying = []
            productos.map((prod)=>{
                qtyBuying.push(prod.buying);
                })
                setCantWidget(qtyBuying.reduce((a,b)=>a+b))
            }
        }
        setWidget();
    },[productos])


    const removeProd = (ide) =>{
        let index = productos.indexOf( productos.find(function(item){return item.id === ide}))
        setProductos(productos.filter(item => item.id !== ide))
    }



    useEffect(()=>{
        console.log("Actualizando")
    },[productos])


    function idExists(id){
        return productos.some(function(el){
            return el.id === id})
    }

    
    return(
        <>
        <CartContext.Provider value={{setProductos,productos,addCart,clearCart,removeProd,cantWidget}}>
        {children}
        </CartContext.Provider>
        </>
    )
}

export default CartProvider;
export {CartContext};