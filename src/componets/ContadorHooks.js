import React, { useState } from 'react'

function Button (props){
    return(
        <button onClick={props.action}>{props.textButton}</button>
    )
}
export default function ContadorHooks (){
    const [contador, setContador] = useState(0)
    const sumar =()=>{
        setContador(contador +1)
    }

    const restar = ()=>{
        setContador(contador -1)
    }
    return(
        <>
            <h2>Hooks - useState</h2> 
            <p>{contador}</p>
            <nav>
                <Button action={sumar} textButton="+"/>           
                <Button action={restar} textButton="-"/>
            </nav>
        </>
    ) 
}