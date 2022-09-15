
import './App.css';
import ItemLisContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';


function App() {
  let titulo = "Hola Mundo";
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <h1>{titulo}</h1>
      </header>
      <ItemLisContainer/>
    </div>
  ); 
}

export default App;
