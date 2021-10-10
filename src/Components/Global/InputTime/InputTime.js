import React from "react";
import "./InputTime.scss";
function InputTime() {
	// Functions
	function distributeItems(r) {}
	// Maps
	const Hours = Array.from({ length: 12 }, (_, i) => i + 1).map(
		(el, index) => {
			// Hours
			return (
				<span data={el} key={index} style={{}}>
					{el}
				</span>
			);
		}
	);
	return (
		<div className="input-time">
			12.30 PM
			<ion-icon name="time-outline" />
			<input
				type="time"
				onChange={e => alert(e.target.value.split(":")[0] - 12)}
			/>
			<div className="picker">
				<div className="t5">Select Time</div>
				<div className="hours">{Hours}</div>
			</div>
		</div>
	);
}

export default InputTime;
