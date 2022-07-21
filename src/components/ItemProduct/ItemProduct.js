import './ItemProduct.css';

import ItemCount from '../ItemCount/ItemCount';


function ItemProduct ({data,action}){

        const {title,image,price,stock} = data;





    return(
        <div className="item-product">
            <img src={`/assets/${image}`} alt="ProductImage"></img>
            <p>{title}</p>
            <p>{price}</p>
    
            <ItemCount title={title} stock={stock} initial="1"/>
                

        </div>




    )
}

export default ItemProduct;