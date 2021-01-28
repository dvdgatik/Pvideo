
//action para guardar elementos a favoritos
export const setFavorite = payload => ({  //return explicito
	type: 'SET_FAVORITE', //snake case y mayusculas
	payload,
});