import React from "react";
import "./Testimonial.scss";

// Import Components
import { lazy } from "@lazy";

function Testimonial({ data: { img, name, job } }) {
	return (
		<div
			className="testimonial d-flex flex-column align-items-end"
			data-aos="fade-left"
		>
			<div className="img d-flex justify-content-end">
				<lazy.img src={img} alt={name} loading={false} />
			</div>
			<div className="info">
				<div className="name t4">{name}</div>
				<div className="job t5">{job}</div>
			</div>
		</div>
	);
}

export default Testimonial;
