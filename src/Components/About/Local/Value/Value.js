import React, { useEffect, useState } from "react";
import "./Value.scss";
// Import Components
import Card from "@global/Card/Card";
// Import Data
import data from "@data/About/Value/data";
function Value() {
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
	const Values = data.map((el, index) => {
		return (
			<div
				className="col-12 col-sm-12 col-md-6 col-lg-4"
				key={index}
				data-aos={mobile ? "fade-right" : "fade-up"}
				data-aos-delay={mobile ? 0 : index * 200}
			>
				<Card data={el} />
			</div>
		);
	});
	return (
		<section className="Value">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{/* Heading */}
						<div className="heading text-center">
							<div className="title-top">VALUE</div>
							<h2 className="t2 mb-4">Our Value</h2>
							<p className="t5">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit,
								<br /> sed do eiusmod tempor incididunt ut.
							</p>
						</div>
					</div>
				</div>
				<div className="values">
					<div className="row justify-content-center">{Values}</div>
				</div>
			</div>
		</section>
	);
}

export default Value;
