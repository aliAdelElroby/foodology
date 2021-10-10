import React, { useState } from "react";
import "./Ask.scss";
function Ask({ data: { ask, answer } }) {
	// States
	const [icon, setIcon] = useState("add-outline");
	const [toggle, setToggle] = useState(false);
	const [answerElement] = useState(React.createRef());

	// Functions
	function open() {
		if (!toggle) {
			setIcon("remove-outline");
			setToggle(prev => !prev);
		} else {
			setIcon("add-outline");
			setToggle(prev => !prev);
		}
	}
	return (
		<div className="ask-item mt-5">
			<div className="ask d-flex justify-content-between align-items-center">
				{ask}
				{answer ? <ion-icon name={icon} onClick={open} /> : ""}
			</div>
			<div
				className="con"
				style={{
					maxHeight: toggle
						? `${answerElement.current.clientHeight + 20}px`
						: "0px"
				}}
			>
				<div className="answer mt-3" ref={answerElement}>
					{answer}
				</div>
			</div>
		</div>
	);
}

export default Ask;
