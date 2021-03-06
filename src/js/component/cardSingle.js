import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/cardSingle.scss";
import { Context } from "../store/appContext";

export const CardSingle = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params);

	const [cardDetails, setCardDetails] = useState({});
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.uid)
			.then(res => res.json())
			.then(data => {
				setCardDetails(data.result);
				console.log(data.result.properties);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="card cardSingle d-flex flex-row  ">
			<img
				src="https://cdn.pixabay.com/photo/2019/12/27/05/26/christmas-stocking-4721704_960_720.jpg"
				className="card-img-right flex-auto d-none d-lg-block imgsingle "
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title namecard">{cardDetails.properties ? cardDetails.properties.name : "name"}</h5>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.gender : "gender"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.eye_color : "eye-color"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.birth_year : "birth-year"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.height : "height"}</p>
				<p className="card-text">{cardDetails.properties ? cardDetails.properties.hair_color : "hair-color"}</p>
			</div>
		</div>
	);
};
CardSingle.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string
};
