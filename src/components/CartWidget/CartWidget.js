import './CartWidget.css';
import {useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import Modal from '../modal/modal';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const [showModal,setShowModal] = useState(false);

    const {productos,setProductos,addCart,cantWidget} = useContext(CartContext);

    return (
        <>
    <div className="cartIconContainer">
        <Link to='/cart'><img className="cartIcon" src={`../assets/2cart.png`} alt="ProductImage"></img></Link>
        {showModal && (
            
          
          
          
            <Modal data={productos}  close={setShowModal}>
                {productos.map((product)=>{
                return( <div className="item-cart" key={product.id}>
                <p>Cantidad: {product.buying}</p>
                <img src={`../assets/${product.image}`} alt="ProductImage"></img>
                <p>{product.title}</p>
                <p>$ {product.price}</p>
                </div>)})}
            </Modal>
)}

        <p className="cantElem">{cantWidget}</p> 
        <ArrowDropDownIcon onClick={()=>{setShowModal(true)}} className="arrow"></ArrowDropDownIcon>
    </div>

</>
)
}

export default CartWidget;