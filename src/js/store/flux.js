const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// BASE_URL: "https://www.swapi.tech/api",
			planets: [],
			people: [],
			vehicles: [],
			getAllData: [],
			allData: [],
			favorites: []
		},
		actions: {
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(err => console.error(err));
			},
			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						setStore({ people: data.results });
					})
					.catch(err => console.error(err));
			},
			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => {
						setStore({ vehicles: data.results });
					})
					.catch(err => console.error(err));
			},
			setFavorites: name => {
				let favorites = getStore().favorites;
				favorites.unshift(name);
				setStore({ favorites: favorites });
				console.log(getStore().favorites);
			},
			deleteFavorites: i => {
				let favorites = getStore().favorites;
				favorites.splice(i, 1);
				setStore({ favorites: favorites });
			}
		}
	};
};
export default getState;
