import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';


function Item ({data,action}){
        const {title,image,price,stock,id,category} = data;
        




        return(
                <Link to={`/${category}/${id}`}>
                <div className="item-product">
            <img src={`../assets/${image}`} alt="ProductImage"></img>
            <p>{title}</p>
            <p>$ {price}</p>
                

        </div>
                </Link>
        )
}
export default Item;