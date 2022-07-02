import { React, useEffect, useState } from "react";
import Planets from "../planets/index.jsx";


export default function Planetary() {

	const [planet, setPlanet] = useState([]);

	useEffect(() => {
		fetch("../../api/planets.json")
		.then(response => response.json())
		.then(data => {
			setPlanet(data.planets);
		})
	}, []);
	
	return (
		<div className="container">
			<h3>Welcome to the Planetary</h3>
			<p>Look...</p>
			<hr />
			{planet.map(planet => 
				<Planets
					key={planet.id}
					id={planet.id}
					name={planet.name}
					description={planet.description}
					img_url={planet.img_url}
					link={planet.link} />
			)}
		</div>
	)
}