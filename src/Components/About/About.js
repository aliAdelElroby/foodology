import React, { useEffect, useState } from "react";
import "./About.scss";
// Import Components
import MainButton from "@global/MainButton/MainButton";
import Card from "@global/Card/Card";
import Footer from "@global/Footer/Footer";
import OurStory from "./Local/OurStory/OurStory";
import Team from "./Local/Team/Team";
import Value from "./Local/Value/Value";
import { lazy } from "@lazy";

// Import Assets
import bg from "./assets/photo.jpg";
function About() {
	// States
	const [mobile, setMobile] = useState(false);

	// Functions
	useEffect(_ => {
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			// If Mobile
			setMobile(true);
		}
	}, []);
	return (
		<div className="about-page">
			<div className="container p-0">
				<div className="row">
					<div className="col-12">
						<lazy.div
							src={bg}
							className="photo position-relative d-flex align-items-center justify-content-center"
						>
							<div className="overlay-blur" />
							<div className="heading position-relative text-center ">
								<h2
									className="t2 text-white"
									data-aos="fade-up"
								>
									Trust Us, All Set Just For You
								</h2>
								<p
									className="t5 mt-4 mb-5"
									data-aos="fade-up"
									data-aos-delay="200"
								>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit,
									<br /> sed do eiusmod tempor incididunt ut.
								</p>
								<MainButton
									data={{ size: "l", val: "Subscribe" }}
								/>
							</div>
						</lazy.div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="content-about">
					<div className="row">
						<div
							className="col-12 col-sm-12 col-md-12 col-lg-8"
							data-aos="fade-right"
							data-aos-delay={mobile ? false : 200}
						>
							<div className="heading">
								<div className="title-top">ABOUT US</div>
								<h2 className="t3">
									We Provide the next
									<br /> levels of catering service
								</h2>
								<p className="t5 mt-5">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud.
								</p>
							</div>
						</div>
						<div
							className="col-12 col-sm-12 col-md-12 col-lg-4"
							data-aos="zoom-in"
							data-aos-delay={mobile ? false : 500}
						>
							<Card
								data={{
									size: "l",
									img: "/assets/rate.svg",
									headline: "Top Rated",
									desc:
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit form du lahoke."
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<OurStory />
			<Team />
			<Value />
			<Footer withoutSub={true} />
		</div>
	);
}

export default About;
