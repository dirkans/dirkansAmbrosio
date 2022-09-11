import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Modal from "../modal/modal";
import Loader from "../Loader/Loader";
import db from "../../firebaseConfig";
import {doc,getDoc} from "firebase/firestore";


const ItemDetailContainer = (props) => {
        const {quierId} = useParams();
        const [isLoading,setLoading] = useState(true);
        const [listProducts,setListProducts] = useState([]);
        const [showModal, setShowModal] = useState(false);
        const getProduct = async () =>{
                const docRef = doc(db, 'productos',quierId);
                const docSnapshot = await getDoc(docRef);
                let product = docSnapshot.data();
                product.id = docSnapshot.id;
                return product;
        }
        
        useEffect(()=>{
                getProduct()
                .then((res)=>{
                        setListProducts(res)
                        setLoading(false)
                        
                })
                .catch((error)=>{
                        console.log("La importación de productos falló")
                })
        },[])

        if(isLoading){
                return <div>Cargando... Porfavor espere.</div>
        } 
        return (
                <div className={`list-products ${showModal ? 'overlay-black' : ' '}`}>
                <ItemDetail data={listProducts} openModal={setShowModal}></ItemDetail>
                {showModal === true && (
                <Modal title="Imagen Producto" close={setShowModal}><img src={`/assets/${listProducts.image}`}/></Modal>)}
                </div>
        )
}
export default ItemDetailContainer;