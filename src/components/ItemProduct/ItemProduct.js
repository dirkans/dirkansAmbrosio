import './ItemProduct.css';
import {useState} from 'react';

function ItemProduct ({data,action}){
    const [counter,setCounter] = useState(1);
    const {title,image,price} = data;

    const addNumber = () => {
        setCounter(counter + 1)
    }
    
    const minusNumber = () => {
        setCounter(counter - 1)
    }

    return(
        <div className="item-product">
            <img src={`/assets/${image}`} alt="ProductImage"></img>
            <p>{title}</p>
            <span>$ {price}</span>
            <div className='countProd'>
                <button onClick={minusNumber}>-</button>
                <p>{counter}</p>
                <button onClick={addNumber}>+</button>
            </div>
            
            <button onClick={action} className="buttonBuy">Comprar</button>
        </div>




    )
}

export default ItemProduct;