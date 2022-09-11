import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection,getDocs,query,where } from "firebase/firestore";
import db from "../../firebaseConfig";
import { Outlet, useLocation } from "react-router-dom";


const ItemFilteredContainer = (data) => {
    const {cat} = useParams();
    const [isLoading,setLoading] = useState(false);
    const [listProducts,setListProducts] = useState([]);
    const location = useLocation();
    
    
    
useEffect(()=>{
    const q = query(
        collection(db,"productos"),
        where("category", "==",cat)
    );
    getDocs(q).then((snapshot)=>{
        if (snapshot.size === 0){
            console.log("No results");
        }
        setListProducts(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
    });
    

},[location]);


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