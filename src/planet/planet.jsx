import React, { useState, useEffect } from "react";
import Satellites from "../satellites/satellites.jsx"


export default function Planet(props) {
	
	return (
		<div>
			<a href={props.link}>
				<h3>{props.name}</h3>			
			</a>
			<p>{props.description}</p>
			<img src={props.img_url}/>
			<Satellites id={props.id}/>
		</div>
	)
	
}

