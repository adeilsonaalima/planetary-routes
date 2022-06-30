import React from "react";

export default function Form(props) {

	return (
			<form onSubmit={props.addSatellites}>
					<input type="text" id="name" autoComplete="nope" placeholder="Satellite" />
					<input type="submit" id="submit" />
			</form>
	)
}