import React, { useState, useEffect } from "react";
import Satellites from "../satellites/index.jsx"
import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function Planet() {

	const [planet, setPlanet] = useState([]);
	const [errorNavigate, setErrorNavigate] = useState(false)

	const { id } = useParams();
	const navigate = useNavigate(); 

	useEffect(() => {
		fetch(`../../api/${id}.json`)
		.then(response => response.json())
		.then(data => {
			setPlanet(data.data);
		}, error => {
			setErrorNavigate(true);
		})
	}, [id]);

	function goToPlanets() {
		navigate('/')
	}

	if(errorNavigate) {
		return <Navigate to="*" />
	}
	
	return (
		<div>
			<button type="button" onClick={goToPlanets}>Home</button>
			<a href={planet.link}>
				<h3>{planet.name}</h3>			
			</a>
			<p>{planet.description}</p>
			<img src={planet.img_url} alt={planet.name} />
			<Satellites id={id}/>
		</div>
	)
}
	