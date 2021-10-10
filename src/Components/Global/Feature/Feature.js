import React from "react";
import "./Feature.scss";
function Feature({ data: { headline, desc, icon }, delay }) {
	return (
		<div
			className="feature d-flex align-items-center"
			data-aos="fade-right"
			data-aos-delay={delay}
		>
			<div className="info d-flex flex-column">
				<div className="headline align-self-end">{headline}</div>
				<div className="desc t5">{desc}</div>
			</div>
			<div className="icon">
				<img src={icon} alt="icon" />
			</div>
		</div>
	);
}

export default Feature;
