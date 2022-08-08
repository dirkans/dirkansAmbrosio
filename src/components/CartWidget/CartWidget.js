import './CartWidget.css';
import {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';



const CartWidget = () => {
    const {productos,setProductos,addCart} = useContext(CartContext);

    return (
        <>
    <div className="cartIconContainer">
        <img className="cartIcon" src={`./assets/2cart.png`} alt="ProductImage"></img>
        <p>{productos.length}</p> {/*A reemplazar por variable con cantidad de elementos en el carrito   */  }
    </div>





</>
)
}

export default CartWidget;