import '../ItemCount/ItemCount.css';
import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {useState,useContext,useEffect} from 'react';



const ItemDetail = ({data, openModal}) => {
    
    
    const {title,image,price,stock,info,colors,id} = data;

const [qty,setQty] = useState(0);


return(

    <div className="detailedCont">
        
            <h2 className="h2Detail">{title}</h2>
            <img className="detailImg"src={`../assets/${image}`} alt="ProductImage" onClick={()=>openModal(true)}></img>
            <p className="info">{info}</p>
            <p className="price">$ {price}</p>
            <p className="stock">Stock disponible: {stock} unidades.</p>
            {
            qty != 0 ? <Link to="/cart"><button  className="button">Finalizar Compra</button></Link> : <ItemCount setQty={setQty} initial="1" productData={data}/>
            }
            
            </div> 
)}

    export default ItemDetail;