import './Time.css'


const Time = (props) => {
    const csd = { backgroundColor: props.corSecundaria }
    const cpm = { borderColor: props.corPrimaria}
    
    return(
        <section className = "time" style={csd}> 
            <h3 style={cpm}>{props.nome}</h3>
            
        </section>

    )

}


export default Time