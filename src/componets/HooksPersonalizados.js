import React, {useEffect, useState} from 'react'
import {useFetch} from '../hooks/useFetch'

export default function HooksPersonalizados(){
    let url = "https://pokeapi.co/api/v2/pokemon/" 
        url = 'https://jsonplaceholder.typicode.com/users'

    let {data, isPending, error} = useFetch(url)

    //console.log(useFetch())
    return(
        <>
            <h2>Hooks personalizados</h2> 
            <p>Para que react sepa que es un hook personalizado el hook tiene que empezar con la palabra use y en minuscula</p>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>
                     {JSON.stringify(error)}
                </mark>
            </h3>
            <pre style={{whiteSpace:'pre-wrap'}}>
                <code>{JSON.stringify(data)}</code>
            </pre>

        </>
    )
}