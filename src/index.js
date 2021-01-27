import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import App from './routes/App';
import {Provider} from 'react-redux';
import {createStore} from  'redux'; // Logica para tener el  store y compartirla a la aplicacion



ReactDOM.render(
	<Provider>
		<App/>
	</Provider>,
	document.getElementById('app')
);

