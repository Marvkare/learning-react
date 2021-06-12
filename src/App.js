import './App.css';
import Referencias from './componets/referencias';
import AjaxHooks from './componets/AjaxHooks'
import RelojHooks from './componets/relojHooks'
import HooksPresonalizados from './componets/HooksPersonalizados'
import ContadorHooks from './componets/ContadorHooks'
import AjaxApi from './componets/Ajaxapis'
import CicloVida from './componets/CicloVida'
import ComunicacionComponentes from './componets/ComunicacionComponentes'
import { EventosES6, EventosES7, MasSobreEventos } from './componets/Eventos'
import Componente from './componets/component'
import Estado from './componets/Estado'
import Propiedades from './componets/propiedades'
import imgComponents from './resources/tipos_de_componentes.png'
import imgPixel from './resources/img.png'
import renderCondicional from './componets/renderizadoCondicional'
import RenderizadoCondicional from './componets/renderizadoCondicional';
import RenderizadoElementos from './componets/renderizadoElementos';

function App() {
  let fecha = new Date();
  let diasName = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
  let mount = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  let nombre = "Marvkare";
  let auth = true;
  let estaciones = ["Primabera", "verano", "otoño", "invierno"]
  return (
    <div className="App">
      <h1>Name: {nombre}</h1>
      <h3>Today is {diasName[fecha.getDay()]} {fecha.getDate()} {mount[fecha.getMonth()]} {fecha.getFullYear()}</h3>
      <img src="" alt="" />
      <p>{auth ? "Foco Prendido :)" : "Foco Apagado :c"}</p>
      <button onClick={auth ? auth = false : auth = true}>Log</button>
      <p>{2 + 5}</p>
      <ul>
        {
          estaciones.map(el => <li>{el}</li>)
        }

      </ul>
      <section>
        <Componente
          msg="Hola soy un componente de clase que muestra tres tipos de declarar un componente"
          img={imgComponents}
        />
        <hr />
        <Propiedades
          cadena="Estos es una cadea de texto"
          numero={12}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "Carlos", edad: 20, puesto: "Programador" }}
          elementoReact={<i>Esto es un elemento de React</i>}
          function={(numero) => numero * numero}
          componenteReact={<Componente msg="Soy un componente pasado como prop" img={imgPixel} />}
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />
        <hr />
        <AjaxApi/>
        <hr />
        <ContadorHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks/>
        <hr />
        <HooksPresonalizados />
        <hr />
        <Referencias/>
     </section>
    </div>
  );
}

export default App;
