import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitalSatate.js';
import '../assets/styles/App.scss'; // poner extension para no confundir con componentes

const API = 'http://localhost:3000/initalState';


const Home = () => {
	
	const initialState = useInitialState(API);

	return(

		<React.Fragment>
			<Search/>
			{initialState.mylist?.length > 0 && (
				<Categories title='Mi lista'>
					<Carousel>
						<CarouselItem/>
					</Carousel>
				</Categories>)
			}
			
			<Categories title = 'Tendencias'>
				<Carousel>
					{initialState.trends?.map(item => 
						<CarouselItem key={item.id} {...item} />
					)}
				</Carousel>
			</Categories>
			<Categories title = 'Originales de Platzi Video'>
				<Carousel>
				{initialState.originals?.map(item=>
					<CarouselItem key={item.id} {...item}/>
				)}
				</Carousel>
			</Categories>
		</React.Fragment>
		);


}

export default Home;