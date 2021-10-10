import React, { useEffect, useReducer, useState } from "react";
import "./Input.scss";
function Input({
	data: { type, label, placeholder, status = "", ref },
	...params
}) {
	// States
	const [id] = useState(label.split(" ").join("-"));

	// Reducer
	const initalSettings = {
		typeState: type ? type : "text",
		passToggle: 0,
		statusIcon: true
	};
	const reducer = (state, action) => {
		let result;
		if (
			state.typeState === "password" ||
			(state.typeState === "text" && state.passToggle === 2)
		) {
			switch (action) {
				case "focus":
					result = {
						typeState: state.typeState,
						passToggle: state.passToggle === 2 ? 2 : 1,
						statusIcon: status === false ? true : false
					};
					return result;
				case "eye":
					result = {
						typeState:
							state.typeState === "password"
								? "text"
								: "password",
						passToggle: state.passToggle === 1 ? 2 : 1,
						statusIcon: status === false ? true : false
					};
					return result;
				case "check":
					result = {
						typeState: "password",
						passToggle: 0,
						statusIcon: true
					};
					return result;
				default:
					return initalSettings;
			}
		} else {
			return initalSettings;
		}
	};
	const [settings, setSettings] = useReducer(reducer, initalSettings);

	// Functions
	useEffect(
		_ => {
			if (status === "check") {
				setSettings("check");
			}
		},
		[status]
	);
	return (
		<div className="input d-flex flex-column mt-5" {...params}>
			<label htmlFor={id}>{label}</label>
			<div
				className={`inputField w-100 ${
					status === "check"
						? "check"
						: status === true
						? "checked"
						: status === "notFound"
						? "notFound"
						: ""
				}`}
			>
				<input
					className="p-3"
					type={settings.typeState}
					id={id}
					disabled={
						status === "check" || status === true ? true : false
					}
					placeholder={placeholder}
					ref={ref}
					onFocus={e => setSettings("focus")}
				/>
				{type === "password" && settings.passToggle > 0 ? (
					<div className="eye">
						<ion-icon
							name={
								settings.passToggle === 2
									? "eye-off-outline"
									: "eye-outline"
							}
							onClick={_ => {
								setSettings("eye");
							}}
						/>
					</div>
				) : (
					""
				)}
				{settings.statusIcon ? (
					<div className="status">
						<ion-icon
							name={`${
								status === true
									? "checkmark-outline"
									: status === "notFound"
									? "close-outline"
									: ""
							}`}
						/>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Input;
