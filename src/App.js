import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {
  

const times = [
  
  {
    nome: 'Programação' ,
    corPrimaria: '#57c278',
    corSecundaria: '#D9F7E9' 
  },{
    nome: 'Frontend' ,
    corPrimaria: '#82cffa' ,
    corSecundaria: '#e8f8ff' 
  },{
    nome: 'Data Science' ,
    corPrimaria: '#a6d157' ,
    corSecundaria: '#f0f8e2' 
  },{
    nome: 'Devops' ,
    corPrimaria: '#e06b69' ,
    corSecundaria: '#fde7e8' 
  },{
    nome: 'UX e Design' ,
    corPrimaria: '#db6ebf' ,
    corSecundaria: '#faf9f5' 
  },{
    nome: 'Mobile' ,
    corPrimaria: '#ffba05' ,
    corSecundaria: '#fff5d9' 
  },{
    nome: 'Inovação e Gestão' ,
    corPrimaria: '#ff8a29' ,
    corSecundaria: '#ffeedf' 
  }
]


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColabAdded = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    
    <div className="App">
            <Banner/>
            <Formulario  aoNovoColabAdded={aoNovoColabAdded} times = {times.map(time => time.nome)} />
           
           
           {times.map (time => <Time key = {time.nome} nome={time.nome} corPrimaria = {time.corPrimaria} corSecundaria = {time.corSecundaria}/>)}


            
    </div>
  );
}

export default App;
