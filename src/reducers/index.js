const reducer = (state, action) => {	
	//return state; 
	//Crear switch que nos permite recibir lo que seria el type evaluarlo dentro de un caso
	switch (action.type) {
		case 'SET_FAVORITE':
			return {  
				...state, //traer el estado que ya tengo
				mylist: [...state.mylist, action.payload] // cambiar elemento dentro del estado que ya tienes
				//traer los elementos con destructuracion, como segundo valor el objeto a guardar
			}
		case 'DELETE_FAVORITE':
			return {
				...state, // crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
				mylist: state.mylist.filter(items => items.id !== action.payload) 
				//En caso de que no tenga el item, reguesa un nuevo elemento
			}
		default:
			return state; // mandar estado como lo encontramos

	}
}

export default reducer;