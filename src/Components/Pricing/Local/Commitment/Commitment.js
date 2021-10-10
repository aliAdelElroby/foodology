import React from "react";
import "./Commitment.scss";
// Import Components
import Card from "../../../Global/Card/Card";
import DeliveryCard from "../../../Global/DeliveryCard/DeliveryCard";
function Commitment() {
	return (
		<div className="Commitment">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading my-5">
							<div className="title-top">COMMITMENT</div>
							<h2 className="t2">Why we are good for you</h2>
							<p className="t5 mt-4">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit <br />
								form du lahoke.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div
						className="col-12 col-sm-12 col-md-12 col-lg-8"
						data-aos="fade-right"
					>
						<Card
							data={{
								size: "l",
								headline: "Top Rated",
								img: "/assets/rate.svg",
								bootstrap: "h-100",
								desc:
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
							}}
						/>
					</div>
					<div
						className="col-12 col-sm-12 col-md-12 col-lg-4"
						data-aos="zoom-in"
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

export default Commitment;
