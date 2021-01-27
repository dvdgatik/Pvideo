import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'; // Nos ayudara a conectar nuestra aplicacion con react-redux
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitalSatate.js';
import '../assets/styles/App.scss'; // poner extension para no confundir con componentes


//const API = 'http://localhost:3000/initalState';


const Home = ({mylist, trends, originals}) => {
	
	//const initialState = useInitialState(API);

	return(

		<React.Fragment>
			<Search/>
			{mylist?.length > 0 && (
				<Categories title='Mi lista'>
					<Carousel>
					{mylist.map(item=>
						<CarouselItem key={item.id} {...item}/>
					)}
					</Carousel>
				</Categories>)
			}
			
			<Categories title = 'Tendencias'>
				<Carousel>
					{trends?.map(item => 
						<CarouselItem key={item.id} {...item} />
					)}
				</Carousel>
			</Categories>
			<Categories title = 'Originales de Platzi Video'>
				<Carousel>
				{originals?.map(item=>
					<CarouselItem key={item.id} {...item}/>
				)}
				</Carousel>
			</Categories>
		</React.Fragment>
		);


}

const mapStateToProps = state => {//traer solo los elementos que necesitas
	return {
		mylist: state.mylist,
		trends: state.trends,
		originals: state.originals
	}
}

//export default Home;
export default connect(mapStateToProps, null)(Home)
/*
Connect recibe dos parametros:
1. el mapeo de los (props)
2. Nuestro dispath que vamos a disparar por medio de nuestros (actions)
	2.1 si la aplicacion no lo tiene pasar valor nulo para que no se rompa
 */