import React from "react";
import "./Section3.scss";
// Import Components
import Testimonial from "../../../Global/Testimonial/Testimonial";
import TestimonialInfo from "../../../Global/TestimonialInfo/TestimonialInfo";

function Section3() {
	return (
		<div className="Section3">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-6">
						<Testimonial
							data={{
								img: "./assets/profile_img.jpg",
								name: "Mason Jonas",
								job: "Human Resource Development"
							}}
						/>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-6">
						<TestimonialInfo
							data={{
								title: "What they say?",
								headline: "Complete Selection",
								desc:
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section3;
