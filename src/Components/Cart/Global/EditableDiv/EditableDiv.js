import React, { useState } from "react";
import "./EditableDiv.scss";
function EditableDiv({ editable, value, className }) {
	// States
	const [finalValue, setFinalValue] = useState(value);
	// Functions
	function onChange(e) {
		setFinalValue(e.target.value);
	}
	return editable ? (
		<input
			className={`editable-input t5 ${className}`}
			type="text"
			value={finalValue}
			onChange={e => onChange(e)}
		/>
	) : (
		<div className={`editable-div t5 ${className}`}>{finalValue}</div>
	);
}

export default EditableDiv;
