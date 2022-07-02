import React, { useEffect, useState } from "react";
import Form from "./form.jsx"

export default function Satellites(props) {

	const [satellites, setSatellites] = useState([]);
	
	useEffect(() => {
		fetch(`../../api/${props.id}.json`)
		.then(response => response.json())
		.then(data => {
			setSatellites(data.satellites);
		})
	}, [props.id]);

	function addSatellites(e) {
		e.preventDefault();
		if(satellites.find(o => o.name === e.target.name.value) || e.target.name.value === 0) {
			alert("Unfortunately we cannot include an unnamed satellite or two with the same name :(");
			e.target.name.value = "";
		} else {
			setSatellites([...satellites, {name: e.target.name.value}]);
			e.target.name.value = "";
		}
	}
	
	return (
		<>
			<ul>
				{satellites.map(satellite =>
				<li key={satellite.name}>{satellite.name}</li>
				)}
			</ul>
			
			<Form addSatellites={addSatellites}/>
		</>
	);
}