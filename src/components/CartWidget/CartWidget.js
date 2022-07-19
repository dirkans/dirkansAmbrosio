import './CartWidget.css';

const CartWidget = () => {
return (
    <div className="cartIconContainer">
        <img className="cartIcon" src={`./assets/2cart.png`} alt="ProductImage"></img>
        <p>2</p> {/*A reemplazar por variable con cantidad de elementos en el carrito   */  }
    </div>

)
}

export default CartWidget;