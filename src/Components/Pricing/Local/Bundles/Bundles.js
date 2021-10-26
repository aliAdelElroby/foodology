import React, { useEffect, useState } from "react";
import "./Bundles.scss";
// Import Components
import PricingCard from "../../../Global/PricingCard/PricingCard";
import { asset } from "@helpers";
// Import Data
import data from "./data/data";
function Bundles() {
	// States
	const [mobile, setMobile] = useState(false);

	// Functions
	useEffect(_ => {
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			// If Mobile
			setMobile(true);
		}
	}, []);

	// Maps
	const bundels = data.map((el, index) => {
		return (
			<div className="col-12 col-sm-12 col-md-6 col-lg-4" key={el.id}>
				<PricingCard
					data={{
						...el,
						icon: asset(el.icon)
					}}
					aos={mobile ? "zoom-in" : "fade-up"}
					aosDelay={mobile ? 0 : index * 300}
				/>
			</div>
		);
	});
	return (
		<div className="Bundles">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading text-lg-center my-5">
							<div className="title-top">BUNDLE</div>
							<h2 className="t2">Suitable Bundles For You</h2>
							<p className="t5">
								Select your suitable catering bundles easy
							</p>
						</div>
					</div>
				</div>
				<div className="row">{bundels}</div>
			</div>
		</div>
	);
}

export default Bundles;
