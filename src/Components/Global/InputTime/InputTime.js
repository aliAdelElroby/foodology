import React, { useReducer } from "react";
import "./InputTime.scss";
function InputTime() {
	// Refs
	const values = React.createRef();

	// Reducers
	const initialSettings = {
		am: 0,
		progress: 0,
		WindowActive: false,
		picker: { prev: 0, rotate: 0 },
		active: 12,
		hour: 12,
		minute: 0
	};
	const reducer = (state, value) => {
		const FinalValue = state.progress === 1 ? value / 5 : value,
			minute = state.progress === 1 ? value : state.minute,
			hour = state.progress === 0 ? value : state.hour,
			deg = (val = FinalValue) => {
				return (360 / 12) * val === 360 ? 0 : (360 / 12) * val;
			};
		switch (value) {
			case "back":
				if (state.progress !== 0) {
					return {
						...state,
						progress: state.progress - 1,
						picker: {
							prev: state.picker.prev,
							rotate: setNearby(deg(hour), state.picker.prev)
						},
						active: hour
					};
				} else {
					return state;
				}
			case "next":
				if (state.progress !== 1) {
					return {
						...state,
						progress: state.progress + 1,
						picker: {
							prev: state.picker.prev,
							rotate: setNearby(
								deg(minute / 5),
								state.picker.prev
							)
						},
						active: (minute === 0 ? 60 : minute) / 5
					};
				} else if (state.progress === 1) {
					return {
						...state,
						progress: 0,
						picker: {
							prev: state.picker.prev,
							rotate: setNearby(deg(hour), state.picker.prev)
						},
						active: hour,
						WindowActive: false
					};
				} else {
					return state;
				}
			case "am":
				return {
					...state,
					am: 1
				};
			case "pm":
				return {
					...state,
					am: 0
				};
			case "toggle":
				return {
					...state,
					WindowActive: !state.WindowActive,
					progress: 0
				};
			default:
				return {
					...state,
					picker: {
						prev: setNearby(deg(), state.picker.prev),
						rotate: setNearby(deg(), state.picker.prev)
					},
					active: FinalValue,
					hour,
					minute: minute === 60 ? 0 : minute
				};
		}
	};

	const [settings, setSettings] = useReducer(reducer, initialSettings);

	// Maps
	const Hours = Array.from({ length: 12 }, (_, i) => i + 1).map(
		(el, index) => {
			// Hours
			const value = settings.progress === 1 ? el * 5 : el;
			return (
				<span
					key={index}
					onClick={_ => setSettings(value)}
					className={settings.active === el ? "active" : ""}
				>
					{value === 60 ? 0 : value}
				</span>
			);
		}
	);
	// Functions
	function setNearby(deg, prev) {
		// This If Condition For Choose the nearest way
		const degTo = deg - prev;
		const degFrom = 360 - Math.abs(degTo);
		if (Math.abs(degTo) > degFrom) {
			if (degTo > 0) {
				const near = Math.abs(degTo) - 360;
				let result = parseInt(prev) + near;
				return result;
			} else {
				const near = Math.abs(Math.abs(degTo) - 360);
				let result = parseInt(prev) + near;
				return result;
			}
		} else {
			return deg;
		}
	}
	// Constants
	const hours =
		settings.hour.toString().length === 1
			? "0" + settings.hour
			: settings.hour;
	const minute =
		settings.minute.toString().length === 1
			? "0" + settings.minute
			: settings.minute;
	return (
		<div className="input-time">
			{hours}:{minute} {settings.am ? "Am" : "Pm"}
			<div
				className="icon"
				onClick={_ => {
					setSettings("toggle");
				}}
			>
				<ion-icon name="time-outline" />
			</div>
			<input
				type="time"
				onChange={e => alert(e.target.value.split(":")[0] - 12)}
			/>
			<div
				className={`picker d-flex flex-column${
					settings.WindowActive ? "" : " hide"
				}`}
			>
				<div className="t5 text-center">Select Time</div>
				<div className="circle mt-4 d-flex justify-content-center">
					<div
						onClick={_ => setSettings("back")}
						className={`back align-self-end ${
							settings.progress === 0 ? "disable" : ""
						}`}
					>
						<ion-icon name="chevron-back-outline" />
					</div>
					<div className="hours">
						<div className="values" ref={values}>
							{Hours}
						</div>
						<div
							className="picker-hours"
							style={{
								transform: `translate(-50%, 0) rotate(${
									settings.picker.rotate
								}deg)`
							}}
						/>
					</div>
					<div
						onClick={_ => setSettings("next")}
						className={`next align-self-end ${
							settings.progress > 1 ? "disable" : ""
						}`}
					>
						<ion-icon name="chevron-forward-outline" />
					</div>
				</div>
				<div className="flex-grow-1 d-flex justify-content-between align-items-end">
					<div
						onClick={_ => setSettings("am")}
						className={`am ${settings.am === 1 ? "active" : ""}`}
					>
						am
					</div>
					<div
						onClick={_ => setSettings("pm")}
						className={`pm ${settings.am === 0 ? "active" : ""}`}
					>
						pm
					</div>
				</div>
			</div>
		</div>
	);
}

export default InputTime;
