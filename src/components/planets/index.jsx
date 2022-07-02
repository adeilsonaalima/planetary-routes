import React from "react";
import { Link } from 'react-router-dom';

export default function Planets(props) {
	
	return (
		<div>
			<Link to={`/planet/${props.id}`}>
				<h3>{props.name}</h3>	
			</Link>
			<p>{props.description}</p>
			<img src={props.img_url} alt={props.name} />
		</div>
	);
}

