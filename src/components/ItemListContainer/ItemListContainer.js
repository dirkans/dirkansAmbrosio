import products from "../../utils/products.mock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'

const ItemListContainer = (props) => {

        const {cat} = useParams();


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
                       
                                getProducts(100, products)

                        .then((res)=>{
                                setListProducts(res)
                                setLoading(false)

                        })
                        .catch((error)=>{
                                console.log("La importacion de productos falló")
                        }).finally(()=>{console.log("process ok")})    
                },[])

                if(isLoading){
                        return <div>Cargando... Porfavor espere.</div>
                }








        
        return (

<div className="list-products">
        <h2>{props.title}</h2>
   
      <ItemList dataProducts={listProducts}/>
</div>

)}
export default ItemListContainer;