import React, {Component} from 'react'

function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}

function Logout(){
    return(
        <div><h3>Logout</h3></div>
    )
}

export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            session: true
        }
      /*  changeState(()=>{
            this.setState({
                session: this.state.session ? this.state.session= false: this.state.session =true
            })
        })*/
    }
    render() {
        return(
            <div>
               <h1>Renderizado condicional</h1>
               {this.state.session? <Login/>:<Logout/>}
               <button >{this.state.session? "Logout":"Login"}</button>
            </div>
        )
    }
}