import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products'
import Detail from './pages/Detail';
import Contact from './pages/contact';
import Accesories from './pages/accesories';
import Filaments from './pages/filaments'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart';

function App() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
    return response.json()
  })
  .then((data)=>{
  console.log("Usuarios: ",data)
})

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
<Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/Detail/:quierId" element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<Cart/>}/>


    

</Routes>

    <footer>
      <p className="footer">Dirkans Impresiones 3D®</p>
    </footer>

    </div>
    </BrowserRouter>
  );
}

export default App;