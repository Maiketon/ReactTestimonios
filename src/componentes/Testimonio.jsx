import React from 'react'; // Para versiones mas recientes en los componenetes ya no es necesario hacer importar nuevamente react en elementos puros jsx
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt='Foto de Miguel Montoya Uno'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> nacido en {props.pais}</p>
        <p className='cargo-testimonio'> {props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;
