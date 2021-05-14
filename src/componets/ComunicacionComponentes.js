import React, {Component} from 'react'

export default class ComunicacionComponentes extends Component{
  

   state={
       contador: 0,
   }

   incrementarContador = (e) =>{
    this.setState({
        contador: this.state.contador +1
    })
   }

   decrementarContador = (e)=>{
       this.setState({
           contador: this.state.contador -1
       })
   }


   render(){
       return (
           <div><h2>Comunicacion entre componentes</h2>
           <p>{this.state.contador}</p>
           <Hijo mensaje="Mensaje para el componente Hijo 1" incrementaContador={this.incrementarContador} textBoton="+"/>
           <Hijo mensaje="Mensaje para el compnente Hijo 2" incrementaContador ={this.incrementarContador} textBoton="-"/>
           </div>
       )
   }
}

function Hijo (props){
    return <>
    <h3>{props.mensaje}</h3>
    <button onClick={props.incrementaContador}>{props.textBoton}</button>
    </>
}