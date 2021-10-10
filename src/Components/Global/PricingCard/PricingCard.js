import React from "react";
import "./PricingCard.scss";

// Import Components
import MainButton from "../MainButton/MainButton";
function PricingCard({ aos, aosDelay, data: { name, price, icon, list } }) {
	// Maps
	const listOfItems = list.map((el, index) => {
		return (
			<li className="t5" key={index}>
				{el}
			</li>
		);
	});
	return (
		<div
			className="PricingCard d-flex flex-column justify-content-between mt-5 mx-auto"
			data-aos={aos ? aos : false}
			data-aos-delay={aosDelay ? aosDelay : false}
		>
			<div className="info d-flex pb-3 mb-3">
				<div className="icon">
					<img src={icon} alt="pricing-card" />
				</div>
				<div className="data">
					<div className="name">{name}</div>
					<div className="price">
						<span className="t2">{`$${price ? price : 0}`}</span>{" "}
						<span className="t5">/ pcs</span>
					</div>
				</div>
			</div>
			<div className="list">
				<ul>{listOfItems}</ul>
			</div>
			<MainButton
				data={{
					size: "l",
					val: "Add",
					bootstrap: "mx-auto mt-3 px-5 d-block"
				}}
			/>
		</div>
	);
}

export default PricingCard;
