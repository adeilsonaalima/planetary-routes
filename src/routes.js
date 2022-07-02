import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetsScreen from "./screens/planets.jsx"
import PlanetScreen from "./screens/planet.jsx";
import NotFoundScreen from "./screens/notFound.jsx"

export default function Rotas() {

    return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<PlanetsScreen/>} />
            <Route exact path="/planet/:id" element={<PlanetScreen/>} />
            <Route path="*" element={<NotFoundScreen/>}/>
        </Routes>
    </BrowserRouter>
    );
}