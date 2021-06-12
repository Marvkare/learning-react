//
import {useEffect, useState} from 'react'

export const useFetch =(url)=>{

    const [data, setdata] = useState(null)
    const [isPending, setisPending] = useState(true)     
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async(url)=>{
            try {
               let res = await fetch(url) 
               if(!res.ok){
                   throw{error:true, status:res.status, statusText:!res.statusText ? 'Ocurrio un error':res.statusText}
               }

               let data = await res.json()

               setisPending(true)
               setdata(data)
               setError(error.false)
            } catch (error) {
               setisPending(true); 
               setError(error)
            }
           
                    
                        /*console.log(json)
                        let pokemon = {
                            id: json.id,
                            name: json.name,
                            avatar: json.sprites.front_default,
                        }

                        setPokemons((pokemons)=>[...pokemons, pokemon])
                    */
                    

                 
        }
        getData(url)
    }, [url])

    return {data, isPending, error}
}