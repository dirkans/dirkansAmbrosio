import './ItemProduct.css';

function ItemProduct ({data}){
const {title,image,price} = data;
    return(
        <div className="item-product">
            <img src={`/assets/${image}`} alt="ProductImage"></img>
            <p>{title}</p>
            <span>$ {price}</span>
            <button className="buttonBuy">Comprar</button>
        </div>




    )
}

export default ItemProduct;