import React from "react";
import { lazy } from "@lazy";
import "./FoodImages.scss";
function FoodImages({ data }) {
	return (
		<div
			className="food-images h-100 d-flex flex-column pb-3 align-items-center align-items-md-start align-items-lg-start"
			id="food-images"
		>
			<div className="main w-100 d-flex align-items-center justify-content-center overflow-hidden align-self-center">
				{data.main ? (
					<lazy.img src={data.main} alt="main" className="w-100" />
				) : (
					""
				)}
			</div>
			<div className="sub d-flex flex-grow-1 align-items-end mt-5 mt-md-0 mt-lg-0">
				<div className="one">
					{data.sub1 ? (
						<lazy.img
							src={data.sub1}
							alt="sub1"
							className="w-100"
						/>
					) : (
						""
					)}
				</div>
				<div className="two ms-3">
					{data.sub2 ? (
						<lazy.img
							src={data.sub2}
							alt="sub2"
							className="w-100"
						/>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}

export default FoodImages;
