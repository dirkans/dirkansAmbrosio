import ItemProduct from "../ItemProduct/ItemProduct";

const ItemListContainer = (props) => {
return (
<div className="list-products">
        <h2>{props.title}</h2>
        <ItemProduct title='Ender 3 v2' price={84999} image="ender3v2.png" />
        <ItemProduct title='Ender 3' price={65200} image="ender3.png"/>
        <ItemProduct title='Hellbot Magna 2' price={81399} image="magna.webp" />
</div>


)
}

export default ItemListContainer;