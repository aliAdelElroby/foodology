import React from "react";
import "./Section4.scss";

// Import Components
import { lazy } from "@lazy";

// Import Assets
import photo from "./assets/section4.jpg";

// Import Data
import list from "@data/MenuFood/list";
import MenuList from "@global/MenuList/MenuList";

function Section4() {
	return (
		<div className="Section4">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-sm-12 col-md-12 col-lg-6">
						{/* Heading For Section4 */}
						<div className="heading text-center">
							<div className="title-top">PRODUCT</div>
							<h3 className="t3">Menus for today</h3>
							<p className="t5">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut.
							</p>
						</div>
					</div>
				</div>
				<div className="content-section4">
					<div className="row">
						{/* Photo */}
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className="photo mw-100 overflow-hidden">
								<lazy.img src={photo} alt="food" />
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							{/* Content */}
							<div className="content">
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
			</div>
		</div>
	);
}

export default Section4;
