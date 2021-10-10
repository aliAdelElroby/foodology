import React from "react";
import "./Home.scss";
// Import Components
import Header from "./Local/Header/Header";
import Section1 from "./Local/Section1/Section1";
import Section2 from "./Local/Section2/Section2";
import Section3 from "./Local/Section3/Section3";
import Section4 from "./Local/Section4/Section4";
import Footer from "../Global/Footer/Footer";
function Home() {
	return (
		<div className="home">
			<Header />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Footer />
		</div>
	);
}

export default Home;
