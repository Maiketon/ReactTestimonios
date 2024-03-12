import './App.css';
import Testimonio from './componentes/Testimonio';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'><h1>Sobre los desarrolladores</h1></div>
     <Testimonio
     nombre='Miguel Angel Montoya'
     pais='Mexico'
     imagen='miguel'
     cargo='Junior Developer'
     empresa='IPN'
     testimonio='Soy un desarrollador en el Instituto politecnico nacionl, aun no egreso, pero estoy aprendiendo a usar esta tecnologia
     para salir de mi carrera como ingeniero'/>
     <Testimonio
     nombre='Shawn Wang'
     pais='Singapur'
     imagen='shawn'
     cargo='Ingeniero de Software'
     empresa='Amazon'
     testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'/>
     <Testimonio
     nombre='Sarah Chima'
     pais='Nigeria'
     imagen='sarah'
     cargo='Ingeniera de Software'
     empresa='ChatDesk'
     testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'/>
    </div>
  );
}

export default App;
