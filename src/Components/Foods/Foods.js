import React, { useEffect } from "react";
import "./Foods.scoped.scss";

// Import Components
import FeaturedFoods from "./Local/FeaturedFoods/FeaturedFoods";
import Menus from "./Local/Menus/Menus";
import Footer from "@global/Footer/Footer";
import { useParams } from "react-router";

function Foods() {
	// Constants
	const { id } = useParams();
	// Functions
	useEffect(
		_ => {
			if (id) {
				const foodImages = document.getElementById("food-images");
				setTimeout(_ => {
					window.scrollTo(0, foodImages.offsetTop);
				}, 500);
			}
		},
		[id]
	);
	return (
		<div className="foods-page">
			<FeaturedFoods />
			<Menus />
			<Footer />
		</div>
	);
}

export default Foods;
