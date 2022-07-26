import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
  return (
    
    <div className="App">
      <NavBar />

      <div className="main-container">
          
    
    <ItemListContainer title="Productos"/>
    </div> 

    <footer>
      <p className="footer">Dirkans Impresiones 3D®</p>
    </footer>

  
    </div>
  );
}

export default App;