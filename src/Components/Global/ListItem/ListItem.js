import React from "react";
import "./ListItem.scss";

function ListItem({ data: { headline, desc } }) {
	return (
		<div className="list-item d-flex" data-aos="fade-right">
			<div className="data">
				<h4 className="t4">{headline}</h4>
				<p className="t5">{desc}</p>
			</div>
		</div>
	);
}

export default ListItem;
