
//action para guardar elementos a favoritos
export const setFavorite = payload => ({  //return explicito
	type: 'SET_FAVORITE', //snake case y mayusculas
	payload,
});

// eliminar favoritos

export const deleteFavorite = payload => ({
	type: 'DELETE_FAVORITE',
	payload,
});