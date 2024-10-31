import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'
import { useState } from 'react'
const Formulario = (props) => {


        const [nome, setNome] = useState('')
        const [cargo, setCargo] = useState('')
        const [imagem, setImagem] = useState('')
        const [time, setTime] = useState('')

        const aoSalvar = (evento) => {
            evento.preventDefault();
            
            props.aoNovoColabAdded({
                nome,
                cargo,
                imagem,
                time
            });
        
            console.log('Dados enviados:', { nome, cargo, imagem, time });
            
            setNome('')
            setCargo('')
            setImagem('')
            setTime('')
        };


    return (
        <section className = "formulario">
            <form onSubmit = {aoSalvar} >
                <h2>Preencha os dados para criar os cards do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome... " aoAlterado = {value => setNome(value)} value = {nome} />
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo..." aoAlterado = {value => setCargo(value)} value = {cargo}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" value = {imagem} aoAlterado = {value =>setImagem(value)}/>
                <ListaSuspensa label = "Time" itens = {props.times} value = {time} aoAlterado = {value => setTime(value)}/>
                <Botao texto = "Criar Card"/>
            </form>
        </section>

    )



}

export default Formulario