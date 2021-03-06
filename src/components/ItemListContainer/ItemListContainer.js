import products from "../../utils/products.mock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (props) => {
        const [listProducts,setListProducts] = useState([]);
        const getProducts = new Promise((resolve,reject)=>{
                setTimeout(()=>{resolve(products)},2000)})
                useEffect(()=>{
                        getProducts
                        .then((res)=>{
                                setListProducts(res)
                        }).catch((error)=>{
                                console.log("La importacion de productos falló")
                        }).finally(()=>{console.log("process ok")})    
                },[])

        return (

<div className="list-products">
        <h2>{props.title}</h2>
        <ItemList dataProducts={listProducts}/>
</div>

)}
export default ItemListContainer;