import products from "../../utils/products.mock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



const ItemFilteredContainer = (data) => {
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
              getProducts(100, products.filter(item => item.category === cat))
                .then((res)=>{
                        setListProducts(res);
                        setLoading(false);
                    })
                .catch((error)=>{
                        console.log("La importacion de productos falló")
                }).finally(()=>{console.log("process ok")})    
        },)

                if(isLoading){
                        return <div>Cargando... Porfavor espere.</div>
                }

               function convertCat () { switch(cat){
                    case "printers":
                        return "Impresoras";
                        break;
                    case "accesories":
                        return "Accesorios";
                        break;
                    case "filaments":
                        return "Filamentos";
                        break;
                    case "spare":
                        return "Repuestos";
                        break;
                    case "printedparts":
                        return "Piezas impresas";
                        break;
                    default:
                        return "Filtrado de productos"
                }
            }
            let catConverted = convertCat();


        return (

<div className="list-products">
      <h2>{catConverted}</h2>
      <ItemList dataProducts={listProducts}/>
</div>

)}
export default ItemFilteredContainer;