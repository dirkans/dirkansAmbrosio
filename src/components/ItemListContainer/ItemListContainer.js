import ItemProduct from "../ItemProduct/ItemProduct";



const ItemListContainer = (props) => {
        const product1 = {
                title: 'Ender 3 v2',
                image: 'ender3v2.png',
                price: 84999,
                stock: 6
        };
        const product2 = {
                title: 'Ender 3',
                price: 65200,
                image: 'ender3.png',
                stock: 12
        };
        const product3 = {
                title: 'Hellbot Magna 2',
                price: 65200,
                image: 'magna.webp',
                stock: 7
        };



        return (


<div className="list-products">
        <h2>{props.title}</h2>
        <ItemProduct data={product1} />
        <ItemProduct data={product2}/>
        <ItemProduct data={product3}/>
</div>


)
}

export default ItemListContainer;