import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss'; // poner extension para no confundir con componentes

const App = () => {
	/*
	videos: nombre de la variable para guardar a estado
	setVideos: actualizar a ese estado
	useState recibe elementos para inicializar (number,string,boleano,objeto, arreglo)

	useEffect: va permitir ir a mi fake api a trae la informacion para pasarsela a la funcion setVideos
	la cual se encarga de actualizar la informacion a la variable videos
	recibe una funcion anonima
	primer parametro
	fetch: se encarga de recibir una API
	then: cuando resuelva la informacion
	transformo el llamado a un json
	la data la mando a la funcion setVideos

	segundo parametro fetch  escuchar alguna propiedad que pueda cambiar si no le pasamos esa
	propiedad va a crear un loop infinito

	map: el resultado de cada uno de los items

	Definidos
	const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
	Sin definir con ?
	 */
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		//logica
		fetch('http://localhost:3000/initalState')
		.then(response => response.json())
		.then(data => setVideos(data));
	},[]);

	//console.log(videos);

	return(

		<div className='App'>
			<Header/> 
			<Search/>
			{videos.mylist?.length > 0 && (
				<Categories title='Mi lista'>
					<Carousel>
						<CarouselItem/>
					</Carousel>
				</Categories>)
			}
			
			<Categories title = 'Tendencias'>
				<Carousel>
					{videos.trends?.map(item => 
						<CarouselItem key={item.id} {...item} />
					)}
				</Carousel>
			</Categories>
			<Categories title = 'Originales de Platzi Video'>
				<Carousel>
				{videos.originals?.map(item=>
					<CarouselItem key={item.id} {...item}/>
				)}
				
				</Carousel>
			</Categories>
			<Footer/>
		</div>
		);

}

export default App;