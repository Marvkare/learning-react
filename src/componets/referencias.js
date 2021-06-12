import React, {createRef} from 'react'

export default function referencias() {
    
    //let refMenu = createRef(),
    let refMenu = useRef(),
        refMenuBtn = useRef();
    const handleToggleMenu = (e)=>{
        const $menu = document.getElementById('menu')
        
        if(e.target.textContent === 'Menu'){
            e.target.textContent = 'Cerrar'
            $menu.style.display = 'block'
        }else{
            e.target.textContent = 'Menu'
            $menu.style.display = 'none'
        }
    }
    return (
        <>
            <h2>Referecias</h2>
            <p>createRef() es para compnentes de clase y useReft es para componetes funcionales</p>
            <button id='menu-btn' ref={refMenuBtn} onClick= {handleToggleMenu}>Menu</button>
            <nav id='menu' style={{display:'none'} } ref= {refMenu}>
                <a href="#">Seccion 1</a>
                <br />
                <a href="#">Seccion 2</a>
                <br />
                <a href="#">Seccion 3</a>
                <br />
                <a href="#">Seccion 4</a>
                <br />
                <a href="#">Seccion 5</a>
            </nav>
        </>
    )
}