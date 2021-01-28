import React from 'react';
import {connect} from 'react-redux'; // importar la aplicacion para disponer el estado o de enviar valores nuestros ations
import PropTypes from 'prop-types';
import {setFavorite} from '../actions'; //index
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  //logica
  const {cover, title, year, contentRating, duration} = props;
  //Crear funcion de guardado hacia favoritos
  const handleSetFavorite = () => {
      //Llamar al elemento mapeado que recibira un objeto con los elementos del props
     props.setFavorite({
           cover, title, year, contentRating, duration
         })
     }
  
  return(
	     <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
            <img className="carousel-item__details--img" 
                  src={plusIcon}
                  onClick={handleSetFavorite} 
                  alt="Plus Icon"/> 
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration} minutos`}
          </p>
        </div>
      </div>
    );
};

//Estoy definiendo como recibo los tipos de datos de este componente
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number
}

const mapDispathToProps = {
 /**/ setFavorite,
}
//export default CarouselItem;
export default connect(null, mapDispathToProps)(CarouselItem);
/* el primer parametro es mapstatetoprops 
pero como no vamos a mapear los elementos lo pasamos nulo
 mapDispathToProps
*/