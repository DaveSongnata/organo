import './CampoTexto.css'


const CampoTexto = (props) => {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

return(

    <div className = "campo-texto">
        <label>{props.label}</label>
            <input value = {props.value} onChange = {aoDigitado} placeholder  = {props.placeholder}></input>
            
    </div>

)    

}

export default CampoTexto
