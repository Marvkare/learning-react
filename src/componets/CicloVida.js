import React,{Component} from 'react'

class Reloj extends Component {
    constructor(props){
        super(props)
    }

    componetWillUnmount(){

    }

    render(props){
        return(
            <h3>{this.props.hora}</h3>
        )

    }
}

export default class CicloVida extends Component {

    constructor(props){
        super(props);
        console.log(0,'El componente se Inicializa, aun No esta en el doom')
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false 
        }

        this.temporizador = null
    }

    componentDidMount(){
        console.log(1, 'El Componente ya se encuentra en el doom')
    }

    componentDidUpdate(prevProps, prevState){
        console.log(2, "El estado de las prBops del componente ha cambiado")
        console.log(prevProps);
        console.log(prevState)
    }

    //Cunado ejecutar este metodo? justamente cuando el componente ya no exista
    componetWillUnmount(){

        console.log(3,"El componente ha sido eliminado del DOM")
        
    }

    tictac = (e)=>{
        this.temporizador = setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        })
    }

    iniciar = (e)=>{
        this.tictac();
        this.setState({
            visible:true
        })
    }
    detener = (e)=>{
        clearInterval(this.temporizador)
        this.setState({
            visible: true
        })
    }

    render(props){
        console.log(4,'El componente se dibujo o se redibujo')
        return(
            <div>
                <h2>Ciclo de vida de los compnentes de clase</h2>
                {//operadores de corto circuito
                    this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </div>
        )
    }

}
