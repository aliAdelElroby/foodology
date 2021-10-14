import React, { useState } from "react";
import "./InputTime.scss";
function InputTime() {
	// States
	const [pm, setPm] = useState(true);
	// Constants
	const pickerHours = React.createRef();

	// Functions
	function set(e, type, i) {
		if (type === "hours") {
			const deg = e.target.getAttribute("data");
			const prev = pickerHours.current.getAttribute("prev");
			const degTo = deg - prev;
			const degFrom = 360 - Math.abs(degTo);
			if (Math.abs(degTo) > degFrom) {
				// This If Condition For Choose the nearest way
				if (degTo > 0) {
					const near = Math.abs(degTo) - 360;
					let result = parseInt(prev) + near;
					pickerHours.current.style.transform = `translate(-50%, 0) rotate(${result}deg)`;
				} else {
					const near = Math.abs(Math.abs(degTo) - 360);
					let result = parseInt(prev) + near;
					pickerHours.current.style.transform = `translate(-50%, 0) rotate(${result}deg)`;
				}
			} else {
				pickerHours.current.style.transform = `translate(-50%, 0) rotate(${deg}deg)`;
				pickerHours.current.setAttribute("prev", deg);
			}
			[...e.target.parentElement.children].forEach(sib =>
				sib.classList.remove("active")
			);
			e.target.classList.add("active");
		}
	}
	// Maps
	const Hours = Array.from({ length: 12 }, (_, i) => i + 1).map(
		(el, index) => {
			// Hours
			return (
				<span
					data={(360 / 12) * el === 360 ? 0 : (360 / 12) * el}
					key={index}
					onClick={e => set(e, "hours", el)}
					className={el === 12 ? "active" : ""}
				>
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
			<div className="picker d-flex flex-column">
				<div className="t5 text-center">Select Time</div>
				<div className="circle mt-4 d-flex justify-content-center">
					<div className="hours">
						<div className="values">{Hours}</div>
						<div
							className="picker-hours"
							ref={pickerHours}
							prev={0}
						/>
					</div>
				</div>
				<div className="flex-grow-1 d-flex justify-content-between align-items-end">
					<div
						onClick={_ => setPm(false)}
						className={`am ${pm ? "" : "active"}`}
					>
						am
					</div>
					<div
						onClick={_ => setPm(true)}
						className={`pm ${!pm ? "" : "active"}`}
					>
						pm
					</div>
				</div>
			</div>
		</div>
	);
}

export default InputTime;
