import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ItemDetail from '../ItemDetail/ItemDetail';
import {Link} from 'react-router-dom';


function Item ({data,action}){
        const {title,image,price,stock,info,id} = data;
        
        const verMas = () => {

console.log("chupala")
        
        }

        


        return(
        <div className="item-product">
            <img src={`./assets/${image}`} alt="ProductImage"></img>
            <p>{title}</p>
            <p>{price}</p>
            <p>Stock disponible: {stock}</p>
            <ItemCount title={title} stock={stock} initial="1"/>
            <button onClick={verMas} className="buttonMore">Ver Más</button>
            


        </div>
        )
}
export default Item;