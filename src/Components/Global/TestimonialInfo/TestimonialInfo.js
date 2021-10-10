import React from "react";
import "./TestimonialInfo.scss";
function TestimonialInfo({ data: { title, headline, desc, color } }) {
	return (
		<div className="TestimonialInfo">
			<div className="title-top">TESTIMONIALS</div>
			<h3 className="t3" data-aos="fade-right" style={{ color: color }}>
				{title}
			</h3>
			<div className="comment">
				<span>“</span>
				<div
					className="headline t4"
					data-aos="fade-left"
					style={{ color: color }}
				>
					{headline}
				</div>
				<p className="t5" data-aos="fade-left">
					{desc}
				</p>
			</div>
		</div>
	);
}

export default TestimonialInfo;
