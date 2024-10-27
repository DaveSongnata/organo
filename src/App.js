import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    
    <div className="App">
            <Banner/>
            <CampoTexto label = "Nome" placeholder = "Digite seu Nome..."/>
            <CampoTexto label = "Cargo" placeholder = "Digite seu Cargo..."/>
            <CampoTexto label = "Imagem" placeholder = "Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
