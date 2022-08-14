import {useState, useContext, useEffect} from 'react';
import ItemList from '../components/ItemList/ItemList';
import { CartContext} from '../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';


const Cart = () => {
   
    const {productos,setProductos,addCart,clearCart,setItemsInCart,ItemsInCart,removeProd} = useContext(CartContext);
    
        let tot = 0;
    
        productos.map((product)=>{
            tot += product.price * product.buying
            })
        

    return(
       <>
    {productos.length>0? <h1>Productos en el carrito:</h1> : <h1><Link to='/Products'>Su carrito se encuentra vacío. Haga clic aqui para ver nuestros productos y armar su pedido!</Link></h1>}
       
        {productos.map((product)=>{
           return( <div className="item-cart" key={product.id}>
            <p>Cantidad: {product.buying}</p>
            <img src={`../assets/${product.image}`} alt="ProductImage"></img>
            <p>{product.title}</p>
            <p>$ {product.price}</p>
            <button onClick={()=>{{removeProd(product.id)}}} >Eliminar del carrito</button>
        </div>)})}

        <p>Total a pagar: $ {tot}</p>
        <button onClick={()=>{clearCart()}}>Vaciar Carrito</button>
        <button>Pagar la compra</button>
        </>
    )
    }
    
    export default Cart;