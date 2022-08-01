import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemFilteredContainer from "../components/ItemFilteredContainer/ItemFilteredContainer"

const Categories = (cat) => {
    return(
        <>
          <ItemFilteredContainer data={cat}/>
    
        </>
    )
}
    
export default Categories