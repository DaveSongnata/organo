import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'
const Formulario = () => {


    const times = [
            'Programação',
            'Front-end',
            'Data-Science',
            'UX e Design',
            'Mobile',
            'Inovação e Gestão',
        ]
    
        var i = 0;   
const aoSalvar = (evento) => {
i = i+1;
        console.log('thanx'+i)

        evento.preventDefault()

}

    return (
        <section className = "formulario">
            <form onSubmit = {aoSalvar} >
                <h2>Preencha os dados para criar os cards do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome..." />
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo..." />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label = "Time" itens = {times}/>
                <Botao texto = "Criar Card"/>
            </form>
        </section>

    )



}

export default Formulario