

import ItemCount from '../ItemCount/ItemCount';

{/* LLAMADO A ESTE COMPONENTE: <ItemDetail data={data}/>   */}

const ItemDetail = ({data}) => {
    const {title,image,price,stock,info,id} = data;

    
    return(
<>
            <h1>{title}</h1>
<img src={`./assets/${image}`} alt="ProductImage"></img>
            <p>{info}</p>
            <p>{price}</p>
            <p>Stock disponible: {stock}</p>

            <ItemCount title={title} stock={stock} initial="1"/>








</>

    )
}
export default ItemDetail;