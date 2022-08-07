import './ItemCount.css';
import {useState} from 'react';
import Swal from 'sweetalert2'



const ItemCount = ({title,stock,setQty,qty}) =>{
 
const [counter,setCounter] = useState(1);
const maxstock = () => {Swal.fire({
    icon: 'error',
    title: 'Lo siento!',
    text: `No puedes comprar mas de ${stock} unidades de ${title} ya que supera nuestro stock. `,
})}

const added = () => {Swal.fire({
    icon: 'info',
    title: 'Has comprado!',
    text: `Has agregado a tu carrito ${counter} unidades de ${title}. Gracias!`,
})}

        
const addNumber = () => {
        if(counter<stock){
        setCounter(counter + 1)} else {maxstock()}
        }
const minusNumber = () => {
        if(counter>1){
        setCounter(counter - 1)}
    }
const onAdd = () => {
    setQty(counter);
    added();
    }

    return(
        <>
        
        <div className='countProd'>
        <button className="mpbutton" onClick={minusNumber}>-</button>
        <p>{counter}</p>
        <button className="mpbutton" onClick={addNumber}>+</button>
        </div>
        <div>
        <button onClick={onAdd} className="button">Agregar al carrito</button>
        
        </div>
        </>
)
}
export default ItemCount;