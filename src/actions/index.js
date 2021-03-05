const menuLoaded = (newMenu) => {
	return {
		type: 'MENU_LOADER',
		payload: newMenu
	}
}

export default menuLoaded;