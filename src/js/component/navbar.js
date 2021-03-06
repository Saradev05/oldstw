import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import LogoIMG from "../../img/logo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbarcss navbar ">
			<Link to="/">
				<span className="navb ar-brand mb-0 h1">
					<img className="logocss" src={LogoIMG} />
				</span>
			</Link>
			<div className="ml-auto dropdown">
				<button
					className="btn btn-dark  dropdown-toggle"
					type="button"
					id="favorite"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					FAVORITES
				</button>
				<ul className="dropdown-menu" aria-labelledby="favorite">
					{store.favorites.map((favorite, i) => {
						// const setObj = new Set(); // creamos pares de clave y array

						// const unicFab = store.favorites.reduce((acc, favorite) => {
						// 	if (!setObj.has(favorite.name)) {
						// 		setObj.add(favorite.name, favorite);
						// 		acc.push(favorite);
						// 	}
						// 	return acc;
						// }, []);

						return (
							<li key={i} className="dropdown-item">
								{favorite}
								<span
									className="ml-4"
									onClick={() => {
										actions.deleteFavorites(i);
									}}>
									<i className="fas fa-trash" />
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

//no repetir favorite https://www.neoguias.com/como-eliminar-duplicados-array-javascript/
