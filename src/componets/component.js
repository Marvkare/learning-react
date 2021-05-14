/* aprendiendo componentes de clases */
import React, {Component} from 'react'


const Componente = (props) => <div>
    <h1>{props.msg}</h1>
    <img src={props.img} alt="" />
    <br />
</div> 

/*function Componente(props){
    return <h2>{props.msg}</h2>
}
*/

/*class Componente extends Component {
    //Un componente de clase siempre va a tener un metodo render por defecto
    render() {
        return <> 
            <h1>{this.props.msg}</h1>
            <img src="" alt="" />
        </>
    }
}*/

export default Componente 