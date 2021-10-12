import React from "react";
import "./Menus.scss";
// Import Components
import { lazy } from "@lazy";
import MenuList from "@global/MenuList/MenuList";

// Import Data
import list from "@data/MenuFood/list";

// Import Assets
import img from "./assets/Menus.jpg";

function Menus() {
	return (
		<section className="menus">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading text-center text-md-start text-lg-start">
							<div className="title-top" data-aos="fade-right">
								MENUS
							</div>
							<h2 className="t2 mb-4" data-aos="fade-left">
								Menus for today
							</h2>
							<p className="t5" data-aos="fade-right">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod
								<br /> tempor incididunt ut.
							</p>
						</div>
					</div>
				</div>
				<div className="content">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<lazy.div
								src={img}
								loading={true}
								className="image"
							/>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<MenuList
								data={{
									headline: "Breakfast Monday",
									desc:
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labort.",
									list
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Menus;
