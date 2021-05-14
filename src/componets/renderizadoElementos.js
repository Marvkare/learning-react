import React, {Component} from 'react'
import Data from '../helpers/data.json'

function ElementoLista (props){
    return(
        <li>
            <a href={props.el.web}>{props.el.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{
    constructor(props){
        super(props)
        this.state = {
            estaciones: ["Primavera", "Verano", "Otoño", "Invierno"]
        }
    }
    render(){
        console.log(Data)
        return(
            <div>
                <h2>Renderizado de elementos </h2>
                <h3>Estaciones de año</h3>
                <ul>
                    {this.state.estaciones.map((elem, i) =>(
                        <li key={elem.id}>{elem}</li>
                    ))}
                </ul>
                <h3>Frameworks Front end Javascript</h3>
                <ul>
                    {
                        Data.frameworks.map((el, i)=>(<ElementoLista key = {i} el={el}/>))
                    }
                </ul>
            </div>
        )
    }
}