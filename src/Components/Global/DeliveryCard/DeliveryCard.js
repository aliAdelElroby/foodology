import React from "react";
import "./DeliveryCard.scss";
// Import Components
import StrokeButton from "../StrokeButton/StrokeButton";
function DeliveryCard({ data: { headline, desc, time, ev, buttonVal } }) {
	return (
		<div className="DeliveryCard">
			<h3 className="t3">{headline}</h3>
			<p className="t5">{desc}</p>
			<div className="time">
				{time} <span>min</span>
			</div>
			<div className="desc t5">{ev}</div>
			<div className="button">
				<StrokeButton val={buttonVal} />
			</div>
		</div>
	);
}

export default DeliveryCard;
