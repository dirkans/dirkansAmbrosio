import {useState, useContext, useEffect} from 'react';
import ItemList from '../components/ItemList/ItemList';
import { CartContext} from '../context/CartContext';
import './Cart.css';




const Cart = () => {
   
   
   
    const {productos,setProductos,addCart,clearCart} = useContext(CartContext);
    
    
    const removeProd = (ide) =>{
       let index = productos.indexOf( productos.find(function(item){return item.id === ide}))
       productos.splice(index,1);
       console.log(index)
        }
    
        let tot = 0;
    
        productos.map((product)=>{
            tot += product.price * product.buying
            })
        
    
    
    


    return(
       <>
        <h1>Productos en el carrito:</h1>
       
        {productos.map((product)=>{
           return( <div className="item-cart" key={product.id}>
            <p>Cantidad: {product.buying}</p>
            <img src={`../assets/${product.image}`} alt="ProductImage"></img>
            <p>{product.title}</p>
            <p>$ {product.price}</p>
            <button onClick={()=>{removeProd(product.id)}} >Eliminar del carrito</button>
        </div>)})}

       


        <p>Total a pagar: {tot}</p>
        <button onClick={()=>{clearCart()}}>Vaciar Carrito</button>
        <button>Pagar la compra</button>

        </>
    )
    
    
    }
    
    export default Cart;