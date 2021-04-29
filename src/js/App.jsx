import React from "react";
import { useState, useEffect } from "react";
import { NavBar } from "./component/navbar.jsx";
import { Jumbotron } from "./component/jumbotron.jsx";
//import { Cards } from "./component/cards.jsx";
import { Cards2 } from "./component/cards2.jsx";
import { Footer } from "./component/footer.jsx";
import JsonData from "../data/data.json";

const App = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<Cards2 data={landingPageData.Cards} />
			</div>
			<Footer />
		</div>
	);
};
export default App;
