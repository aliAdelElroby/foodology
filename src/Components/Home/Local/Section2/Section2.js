import React from "react";
import "./Section2.scss";
// Import Components
import ListItem from "../../../Global/ListItem/ListItem";
import { lazy } from "../../../../Custom/Lazy";

// Import Data
import ListData from "./ListData/ListData";

// Import Assets
import photo from "./assets/photo.jpg";
function Section2() {
	// Maps
	const list = ListData.map(el => {
		return <ListItem data={el} key={el.id} />;
	});

	return (
		<div className="Section2">
			<div className="container">
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
						<div className="col-12 col-sm-12 col-md-10 col-lg-6">
							<div className="list">{list}</div>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className="photo ">
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
