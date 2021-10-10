import React, { useEffect, useState } from "react";
import "./Section1.scss";
// Import Data
import data from "./data/data";

// Import Components
import Card from "../../../Global/Card/Card";
import DeliveryCard from "../../../Global/DeliveryCard/DeliveryCard";

function Section1() {
	// States
	const [mobile, setMobile] = useState(false);

	// Functions
	useEffect(() => {
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			// If Mobile
			setMobile(true);
		}
	}, []);

	// Maps
	const cards = data.map((el, index) => {
		return (
			<div
				className="col-12 col-sm-12 col-md-6 col-lg-4"
				key={el.id}
				data-aos={mobile ? "fade-right" : "fade-up"}
				data-aos-delay={mobile ? 0 : index * 300}
			>
				<Card data={el} />
			</div>
		);
	});
	return (
		<div className="Section1">
			<div className="container">
				<div className="row">
					<div className="heading">
						<div className="title-top">COMMITMENT</div>
						<h2 className="t2">Why we are good for you</h2>
						<p className="t5">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit form du lahoke.
						</p>
					</div>
				</div>
				<div className="row">
					{cards}
					<div
						className="col-12 col-sm-12 col-md-12 col-lg-4"
						data-aos="zoom-in"
						data-aos-delay={mobile ? 100 : 600}
					>
						<DeliveryCard
							data={{
								headline: "Express Delivery",
								desc:
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit form du lahoke.",
								time: 37,
								ev: "Average delivery times.",
								buttonVal: "See More"
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section1;
