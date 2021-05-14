import React, { Component } from 'react'

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}
export default class AjaxApis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: [],

        }
    }

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                json.results.forEach(el => (
                    fetch(el.url).then((res) => res.json()).then((json) => {
                        console.log(json)
                        let pokemon ={
                            id: json.id,
                            name: json.name,
                            avatar: json.sprites.front_default,
                        }

                        let pokemons = [...this.state.pokemons,pokemon];
                        this.setState({
                            pokemons
                        })
                    })

                ))
            })
    }



    render(props) {
        return (
            <div>
                <h2>Peticiones asincronas en componentes de clase</h2>
                {this.state.pokemons.length ===0 ? <h3>Cargando...</h3>:this.state.pokemons.map(
                    (el)=> <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)
                }
                
            </div>
        )
    }
}