import {useState, useContext, useEffect} from 'react';

import { CartContext} from '../context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import Modal from '../components/modal/modal';
import db from "../firebaseConfig";
import { collection,addDoc } from 'firebase/firestore';

const Cart = () => {
    const [showModal,setShowModal] = useState(false);
    const {productos,clearCart,removeProd} = useContext(CartContext);
    const [formData,setFormData] = useState({
        name: '',
        phone:'',
        email:''
    })
    let tot = 0;
    productos.map((product)=>{
        tot += product.price * product.buying
    })
    const [order,setOrder] = useState()
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    

    
    
    
    const sendOrder = (e) => {
        e.preventDefault();
        setOrder({
            items: productos.map((product)=>{
                return {id: product.id,
                        title: product.title,
                        price: product.price,
                        buying: product.buying}
            }),
            buyer: {name: formData.name,
                    phone: formData.phone,
                    email: formData.email},
            date: new Date().toLocaleString(),
            total: tot
        })
        pushData(order);    
}

    //Estado donde se almacena el ID de orden generado
    const [okId,setOkId] = useState();
   
    //useEffect para que al cerrar el modal luego de haber enviado la orden, se vacíe el carrito de compras.
    useEffect(()=>{
    if(okId && !showModal){
    clearCart()}}
    ,[showModal])
   
    const pushData = async(newOrder) => {
    const collectionOrder = collection(db,'ordenes');
        addDoc(collectionOrder,newOrder).then(({id})=> setOkId(id))
                                        

    }
 


    useEffect(()=>{
    
if(showModal==true && order==null){
        if (document.getElementById('name').value !== "" && document.getElementById('phone').value !== "" &&  document.getElementById('email2').value !== "" && document.getElementById('email2').value == document.getElementById('email').value){
        document.getElementById('submit').disabled = false; document.getElementById('errMessage').innerHTML = ""}
     else {document.getElementById('submit').disabled = true; document.getElementById('errMessage').innerHTML = "Los emails no coinciden"}}


}
    )







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
        <button onClick={()=>{setShowModal(true)}} >Pagar la compra</button>
        {showModal &&
            <Modal close={setShowModal}>
            {okId ? (
            <>
            <h2>Muchas gracias por su compra!</h2>
            <p>El ID de su orden es {okId}</p>
            </>
            ) :
            <form onSubmit={sendOrder} className="form">
                <p>Porfavor ingrese sus datos para finalizar el pedido</p>
                <input id="name" type='text' name='name' placeholder='Ingrese el nombre' value={formData.name} onChange={handleChange} required/>
                <input id="phone" type='number' name='phone' placeholder='Ingrese el teléfono' value={formData.phone} onChange={handleChange} required/>
                <input id="email" type='email' name='email' placeholder='Ingrese el email' value={formData.email} onChange={handleChange}/>
                <input id="email2" type='email' name='email2' placeholder='Repita su email' onChange={handleChange}/>
                
                <button id="submit" type="submit" disabled='disabled' >Generar pedido!</button>
                <p id="errMessage"></p>
                
            </form> 
            }   
            </Modal>}
        </>
    )
    }
    
    export default Cart;