import React, { useEffect, useState } from "react";
import "./FAQ.scss";
// Import Components
import Ask from "../../../Global/Ask/Ask";
import Testimonial from "../../../Global/Testimonial/Testimonial";
import TestimonialInfo from "../../../Global/TestimonialInfo/TestimonialInfo";

// Import Data
import data from "./data/data";
function FAQ() {
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
	const asks = data.map((el, index) => {
		return (
			<div
				className="col-12 col-sm-12 col-md-12 col-lg-6"
				key={el.id}
				data-aos={mobile ? "fade-right" : "fade-up"}
				data-aos-offset="100"
				data-aos-delay={mobile ? 0 : index * 200}
			>
				<Ask data={el} />
			</div>
		);
	});
	return (
		<div className="FAQ">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading text-center">
							<div className="title-top">FAQ</div>
							<div className="t2">Got Question?</div>
							<div className="t5">
								Perfect,We’ve got the answers!
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-5">{asks}</div>
				<div className="testimonial-con">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1">
							<Testimonial
								data={{
									img: "./assets/profile_img.jpg",
									name: "Mason Jonas",
									job: "Human Resource Development"
								}}
							/>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
							<TestimonialInfo
								data={{
									title: "What they say?",
									headline: "Complete Selection",
									desc:
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
									color: "white"
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FAQ;
