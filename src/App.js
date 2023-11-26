import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AlbumDetails from "./pages/AlbumDetails/AlbumDetails";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />

				<Route path="/album/:slug" element={<AlbumDetails />} />

				<Route path="*" element={<LandingPage />} />
			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;