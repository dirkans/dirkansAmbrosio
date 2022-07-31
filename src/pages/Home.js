import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const Home = () =>{
return(
      <div className="main-container">
        <ItemListContainer title="Productos"/>
    </div> 


)
}

export default Home;