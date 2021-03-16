const menuLoaded = (newMenu) => {
	return {
		type: 'MENU_LOADER',
		payload: newMenu
	}
}
const menuRequested = () => {
	return {
		type: 'MENU_REQUESTED',
	}
}
const addToCart = (id) => {
	return {
		type: 'ITEM_ADD_TO_CART',
		payload: id
	}
}
const deleteFormCart = (id) => {
	return {
		type: 'ITEM_REMOVE_FORM_CART',
		payload: id
	}
}


export { 
	menuLoaded, 
	menuRequested,
	addToCart,
	deleteFormCart
};