import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Loadplanets } from "../component/planets.js";
import { Context } from "../store/appContext";
import { CardPlanets } from "../component/cardPlanets.js";
import { CardVehicles } from "../component/cardVehicles.js";
import { CardPeople } from "../component/cardPeople.js";
// Sara StarWars Flux Fetch Api

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPlanets();
		actions.loadVehicles();
		actions.loadPeople();
	}, []);

	const allPlanets = store.planets.map((planet, i) => {
		return <CardPlanets key={i} name={planet.name} url={planet.url} />;
	});
	const allVehicles = store.vehicles.map((vehicle, i) => {
		return <CardVehicles key={i} name={vehicle.name} url={vehicle.url} />;
	});
	const allPeople = store.people.map((person, i) => {
		return <CardPeople key={i} name={person.name} url={person.url} />;
	});

	return (
		<div className="fondo container-fluid ">
			<div className="text-center row mt-5">
				<h1>Planets</h1>
				<div className="all-planets  "> {allPlanets} </div>
			</div>

			<div className="text-center mt-5">
				<h1>People</h1>
				<div className="all-people "> {allPeople} </div>
			</div>

			<div className="text-center mt-5">
				<h1>Vehicles</h1>
				<div className="all-vehicles "> {allVehicles} </div>
			</div>
		</div>
	);
};
