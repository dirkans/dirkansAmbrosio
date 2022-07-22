import './ItemCount.css';
import {useState} from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const ItemCount = ({title,stock}) =>{
 
const [counter,setCounter] = useState(1);
const maxstock = () => {Swal.fire({
    icon: 'error',
    title: 'Lo siento!',
    text: `No puedes comprar mas de ${stock} unidades de ${title} ya que supera nuestro stock. `,
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
        console.log(`Has agregado a tu carrito ${counter} unidades de ${title}`)
    }

    return(
        <>
        <div className='countProd'>
        <button onClick={minusNumber}>-</button>
        <p>{counter}</p>
        <button onClick={addNumber}>+</button>
        </div>
        <div>
        <button onClick={onAdd} className="buttonBuy">Comprar</button>
        </div>
        </>
)
}
export default ItemCount;