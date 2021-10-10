import React, { useState } from "react";
import "./Counter.scss";
function Counter({ end }) {
	// States
	const [counter, setCounter] = useState(1);

	// Functions
	function add() {
		if (end) {
			if (counter < end) {
				setCounter(prev => prev + 1);
			}
		} else {
			setCounter(prev => prev + 1);
		}
	}
	function remove() {
		if (counter > 1) {
			setCounter(prev => prev - 1);
		}
	}
	return (
		<div className="counter d-flex align-items-center">
			<div className="t5 me-2">Qt.</div>
			<div className="counter d-flex justify-content-between align-items-center">
				<div
					className={`remove me-2 ${counter <= 1 ? "disable" : ""}`}
					onClick={remove}
				>
					<ion-icon name="remove-circle-outline" />
				</div>
				<div className="value">{counter}</div>
				<div
					className={`add ms-2 ${counter >= end ? "disable" : ""}`}
					onClick={add}
				>
					<ion-icon name="add-circle-outline" />
				</div>
			</div>
		</div>
	);
}

export default Counter;
