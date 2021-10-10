import React, { useContext, useEffect, useState } from "react";
import "./FoodData.scss";

// Import Components
import { motion } from "framer-motion";
import MainButton from "../MainButton/MainButton";
import StrokeButton from "../StrokeButton/StrokeButton";
import { addWithIdToLocal } from "@helpers";

// Import Data
import { CartContext } from "@/App";

function FoodData({ data, delay }) {
	// States
	const [animation, setAnimation] = useState(null);
	const [dataApper, setDataApper] = useState(animation ? null : data);

	// Constants
	const CartItems = useContext(CartContext);

	// Functions
	useEffect(
		_ => {
			setTimeout(_ => {
				setAnimation(null);
				setTimeout(_ => {
					setDataApper(data);
					setAnimation({
						x: 0,
						opacity: 1
					});
				}, 1000);
			}, delay || 0);
		},
		[data, data.id, delay]
	);
	return (
		<div
			className="FoodData text-end d-flex flex-column min-h-100 mt-5"
			id="food-data"
		>
			<motion.div
				initial={{ x: -20, opacity: 0 }}
				animate={animation}
				transition={{ duration: 0.3 }}
				className="t3"
			>
				{dataApper ? dataApper.headline : ""}
			</motion.div>

			<motion.div
				initial={{ x: 20, opacity: 0 }}
				animate={animation}
				transition={{ duration: 0.3, delay: 0.3 }}
				className="cal mt-3 mb-4"
			>
				Calories : {dataApper ? dataApper.calories : ""}
			</motion.div>

			<motion.div
				initial={{ x: -20, opacity: 0 }}
				animate={animation}
				transition={{ duration: 0.3, delay: 0.6 }}
				className="t5 lh-lg flex-grow-1"
			>
				{dataApper ? dataApper.desc : ""}
			</motion.div>

			<div className="buttons mt-5">
				<StrokeButton val="See More" />
				<MainButton
					data={{ size: "m", val: "ADD", bootstrap: "ms-4" }}
					onClick={_ => {
						addWithIdToLocal(dataApper.id, "foods");
						CartItems.update("foods");
					}}
				/>
			</div>
		</div>
	);
}

export default FoodData;
