import React from "react";
import "./Section2.scss";
// Import Components
import ListItem from "@global/ListItem/ListItem";
import { lazy } from "@lazy";

// Import Data
import data from "@data/Home/Section2/data";

// Import Assets
import photo from "./assets/photo.jpg";
function Section2() {
	// Maps
	const list = data.map(el => {
		return <ListItem data={el} key={el.id} />;
	});

	return (
		<div className="Section2 overflow-hidden">
			<div className="container">
				{/* Heading */}
				<div className="row">
					<div className="col-12">
						<div className="heading text-center">
							<div className="title-top">PROCESS</div>
							<h3 className="t2">Just easy step for you</h3>
						</div>
					</div>
				</div>
				<div className="content-section2">
					<div className="row">
						{/* List */}
						<div className="col-12 col-sm-12 col-md-10 col-lg-6">
							<div className="list pt-lg-5">{list}</div>
						</div>
						{/* Photo */}
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className="photo m-auto d-block  d-md-none d-lg-block">
								<lazy.img src={photo} alt="food" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section2;
