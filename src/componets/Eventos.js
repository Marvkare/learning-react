import React, { Component } from 'react'

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar() {
        console.log("sumar")
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar() {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(props) {
        return (
            <div>
                <h2>Eventos en un componente de clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar} >+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}

export class EventosES7 extends Component {

    state = {
        contador: 0,
    }



    sumar = (e) => {
        console.log("sumar")
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(props) {
        return (
            <div>
                <h2>Eventos en un componente de clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar} >+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}
/*Funcion destructurada 
function Boton(myOnclick){*/
function Boton(props) {
        return <button onClick={props.MyonClick}>Boton echo componente</button>
        
        
    }
    
export class MasSobreEventos extends Component {

    hadleClick = (e, msg)=>{
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(msg)
    }

    

    render(){
        return(
            <div>
                <h1>Mas sobre eventos</h1>
                <button onClick={(e)=>this.hadleClick(e, "hola pasando parametro desde un evento")}>Saludar</button>
                <Boton MyonClick={(e)=> this.hadleClick(e, "")}/>
            </div>
        )
    }
}