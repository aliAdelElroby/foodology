import React from "react";
import "./Team.scss";
// Import Components
import { lazy } from "@lazy";

// Import Assets
import img from "./assets/Picture.jpg";
function Team() {
	return (
		<section className="Team">
			<div className="container">
				<div className="row">
					<div
						className="col-12 col-sm-12 col-md-12 col-lg-6 order-2 order-lg-1"
						data-aos="zoom-in"
					>
						<div className="photo-team">
							<lazy.img src={img} alt="Team" />
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-lg-2">
						<div className="heading text-end">
							<div className="title-top" data-aos="fade-left">
								team
							</div>
							<h2 className="t2 mt-3 mb-5" data-aos="fade-right">
								Foodology
								<br />
								Teams
							</h2>
							<p className="t5" data-aos="fade-left">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team;
