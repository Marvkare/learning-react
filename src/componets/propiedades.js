import React, { Component} from 'react'
import PropTypes from 'prop-types'

export default function Propiedades(props){
    return(
        <div>
            <h1>Propiedades de los componentes de React</h1>
            <p>
                {props.porDefecto}

            </p>
            <ul>
                <li>String: {props.cadena}</li>
                <li>let: {props.numero} </li>
                <li>Boolean: {props.booleano? "verdadero":"Falso"} </li>
                <li>Arreglo: {props.arreglo.join(",")}</li>
                <li>Objeto: {props.objeto.nombre}</li>
                <li>Elemento: {props.elementoReact}</li>
                <li>function:  {props.arreglo.map(props.function).join(',') }</li>
                <li>Componente: {props.componenteReact}</li>
            </ul>
        </div>
    )
}

//defaultProps es un objeto donde podemos espesificar propiedades por defecto
Propiedades.defaultProps ={
    porDefecto:"Esta es una defaultProps"
}

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
};