import products from "../../utils/products.mock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (props) => {
        const [isLoading,setLoading] = useState(true);
        const [listProducts,setListProducts] = useState([]);
        const getProducts = new Promise((resolve,reject)=>{
                setTimeout(()=>{resolve(products)},2000)})
                useEffect(()=>{
                        getProducts
                        .then((res)=>{
                                setListProducts(res)
                                setLoading(false        )

                        }).catch((error)=>{
                                console.log("La importacion de productos falló")
                        }).finally(()=>{console.log("process ok")})    
                },[])

                if(isLoading){
                        return <div>Cargando... Porfavor espere.</div>
                }


        return (

<div className="list-products">
      <ItemList dataProducts={listProducts}/>
</div>

)}
export default ItemListContainer;