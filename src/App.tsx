import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import "./App.css";
import ParticularMovie from "./pages/ParticularMovie";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movie/:id" element={<ParticularMovie />} />
            </Routes>
        </Router>
    );
}

export default App;
