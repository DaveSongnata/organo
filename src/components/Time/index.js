import Colaborador from '../Colaborador'
import './Time.css'


const Time = (props) => {
    const csd = { backgroundColor: props.corSecundaria }
    const cpm = { borderColor: props.corPrimaria}
    
    return(
        (props.colaboradores.length > 0) ? <section className = "time" style={csd}> 
            <h3 style={cpm}>{props.nome}</h3>
            <div className = "colaboradores">{props.colaboradores.map (colaborador => <Colaborador corDeFundo = {props.corPrimaria} key = {colaborador.nome} nome = {colaborador.nome} cargo = {colaborador.cargo} imagem = {colaborador.imagem}/>)}</div>
        </section>: ''

    )

}


export default Time