import '../ItemCount/ItemCount.css';
import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {useState} from 'react';


const ItemDetail = ({data}) => {
    const {title,image,price,stock,info,colors} = data;

const [qty,setQty] = useState(0);
console.log(qty)

return(

    <div className="detailedCont">
        
            <h2 className="h2Detail">{title}</h2>
            <img className="detailImg"src={`../assets/${image}`} alt="ProductImage"></img>
            <p className="info">{info}</p>
            <p className="price">$ {price}</p>
            <p className="stock">Stock disponible: {stock} unidades.</p>
            
            {
                
                qty != 0 ? <Link to="/cart"><button className="button">Finalizar Compra</button></Link> : <ItemCount setQty={setQty} qty={qty} title={title} stock={stock} initial="1"/>
            }
            
            
            </div> 

    )}

    export default ItemDetail;