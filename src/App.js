import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Accesories from './pages/accesories';
import Cart from './pages/Cart';
import Contact from './pages/contact';
import Filaments from './pages/filaments'
import Home from './pages/Home';
import PrintedParts from './pages/printedparts'
import Printers from './pages/printers'
import Products from './pages/Products'
import Services from './pages/services'
import Spare from './pages/spare'
import Categories from './pages/categories'
import Detail from './pages/Detail';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar />
      <div className="main">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/accesories" element={<Accesories/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/:category/:quierId" element={<Detail/>}/>
        <Route path="/categories/:cat" element={<Categories/>}/>
        <Route path="/filaments" element={<Filaments/>}/>
        <Route path="/printedparts" element={<PrintedParts/>}/>
        <Route path="/printers" element={<Printers/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/spare" element={<Spare/>}/>
        <Route path="*" element={<h1>ERROR - 404 Sitio no encontrado</h1>}/>
      </Routes>
      </div>
    <footer>
      <p className="footer">Dirkans Impresiones 3D®</p>
    </footer>

    </div>
    </BrowserRouter>
  );
}

export default App;