import React from "react";
import "./CategoriesList.scss";

// Import Components
import FoodItem from "../FoodItem/FoodItem";
function CategoriesList({ list = [], onSelect, ...params }) {
	// Maps
	const listApper = list
		? list.map(({ id, images: { sub1 }, headline }, index) => {
				return (
					<FoodItem
						key={id}
						data={{
							id,
							image: sub1,
							headline,
							delay: index,
							animation: index <= 3 ? true : false
						}}
					/>
				);
		  })
		: "";
	return (
		<div className="categories-list" {...params}>
			{listApper}
		</div>
	);
}

export default CategoriesList;
