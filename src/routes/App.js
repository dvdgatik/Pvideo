import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
/*Crear una funcion que va a exponer Browser Router y los elementos para la construccion de rutas
La prmer ruta que ya tenemos es el home
Route: permite añadir el elemento que necesitas
exact: path exacto
cambio de App a Home esto es por que la App de routes sera la principal
*/
const App = () => (
	<BrowserRouter>
	<Layout>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/login' component={Login}/>
			<Route exat path='/signup' component={Register}/>
			<Route component={NotFound}/>
		</Switch>
	</Layout>
	</BrowserRouter>
);

export default App;