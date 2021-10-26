import React from "react";
import "./Card.scss";
import { asset } from "@helpers";

function Card({
	data: { size = "", img, imgPublic, headline, desc, bootstrap }
}) {
	return (
		<div
			className={`primary-card ${bootstrap}`}
			style={{
				width: size.toLowerCase() === "l" ? "100%" : "333px",
				maxWidth: size.toLowerCase() === "l" ? "none" : "333px"
			}}
		>
			<div className="img">
				<img src={img || asset(imgPublic)} alt="card" />
			</div>
			<div className="headline t3">{headline}</div>
			<div
				className="desc t5"
				style={{
					maxWidth: size.toLowerCase() === "l" ? "90%" : "none",
					lineHeight: size.toLowerCase() === "l" ? "22pt" : "auto"
				}}
			>
				{desc}
			</div>
		</div>
	);
}

export default Card;
