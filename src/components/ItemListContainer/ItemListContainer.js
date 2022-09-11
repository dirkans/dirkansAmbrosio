import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import Loader from "../Loader/Loader";
import { collection,getDocs } from "firebase/firestore";
import db from "../../firebaseConfig";

const ItemListContainer = (props) => {
        const {cat} = useParams();
        const [isLoading,setLoading] = useState(true);
        const [listProducts,setListProducts] = useState([]);

const getProducts = async () => {
        const productCollection = collection(db, 'productos');
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc)=>{
                let product = doc.data();
                product.id = doc.id;
                return product
        })
        return productList
}
useEffect(()=>{
        getProducts()
        .then((res) =>{
                setListProducts(res);
                setLoading(false);
                
        })
        .catch((error)=>{
                console.log("La importacion de productos falló")
                }).finally(()=>{console.log("process ok")})    
},[])


if(isLoading){
        return <Loader/>
}

return (
        <div className="list-products">
                <h2>{props.title}</h2>
                <ItemList dataProducts={listProducts}/>
        </div>
)}

export default ItemListContainer;