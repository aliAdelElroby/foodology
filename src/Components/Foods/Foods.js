import React, { useEffect, useState } from "react";
import "./Foods.scoped.scss";

// Import Components
import FeaturedFoods from "./Local/FeaturedFoods/FeaturedFoods";
import Menus from "./Local/Menus/Menus";
import Footer from "@global/Footer/Footer";
import { useParams } from "react-router";

function Foods() {
	// States
	const [mobile, setMobile] = useState(false);

	// Constants
	const { id } = useParams();

	// Functions
	useEffect(
		_ => {
			if (window.matchMedia("(max-width: 767.98px)").matches) {
				// If Mobile
				setMobile(true);
			}
			if (id) {
				const foodImages = document.getElementById("food-images");
				setTimeout(_ => {
					if (mobile) {
						window.scrollTo(0, foodImages.offsetTop - 50);
					} else {
						window.scrollTo(0, foodImages.offsetTop - 150);
					}
				}, 300);
			}
		},
		[id, mobile]
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
