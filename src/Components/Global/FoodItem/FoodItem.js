import React from "react";
import "./FoodItem.scss";
// Import Components
import { lazy } from "@lazy";
import { NavLink } from "react-router-dom";
function FoodItem({ data: { id, image, headline } }) {
	return (
		<div className="food-item" data-id={id}>
			<NavLink to={`/foods/${id}`}>
				<div className="item d-flex align-items-center justify-content-end justify-content-md-start justify-content-lg-start">
					<div className="img ms-3 ms-md-0 ms-lg-0 me-lg-3 me-md-3">
						<lazy.img src={image} alt="img" loadDelay={2000} />
					</div>
					<div className="value">{headline}</div>
				</div>
			</NavLink>
		</div>
	);
}

export default FoodItem;
