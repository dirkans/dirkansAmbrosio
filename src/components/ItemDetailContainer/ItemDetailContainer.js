import products from "../../utils/products.mock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = (props) => {
        const {quierId,category} = useParams();
        const [isLoading,setLoading] = useState(true);
        const [listProducts,setListProducts] = useState([]);
        
        let coso = true;
        const getProducts = (time,task) => {
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    if (coso){
                        resolve(task)
                    }
                    else{reject("Error")}
                },time);
            });
        }


                useEffect(()=>{
                        getProducts(100, products.find(item => item.id === parseInt(quierId)))
                        .then((res)=>{
                                setListProducts(res)
                                setLoading(false)

                        }).catch((error)=>{
                                console.log("La importacion de productos falló")
                        }).finally(()=>{console.log("process ok")})    
                },[])

                if(isLoading){
                        return <div>Cargando... Porfavor espere.</div>
                }


        return (

<div className="list-products">
    
      <ItemDetail data={listProducts}></ItemDetail>
      
</div>

)}
export default ItemDetailContainer;