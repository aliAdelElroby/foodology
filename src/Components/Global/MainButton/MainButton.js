import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function MainButton({
	data: { val, disable, bootstrap, style = null, size, animate = null },
	onClick,
	...params
}) {
	// States
	const [buttonElement] = useState(React.createRef()),
		[focus, setFocus] = useState(false),
		[sizeState] = useState(
			size.toLowerCase() === "l"
				? "btnPL"
				: size.toLowerCase() === "m"
				? "btnPM"
				: ""
		);

	// Functions
	useEffect(() => {
		window.addEventListener("click", e => {
			if (focus && e.target !== buttonElement.current) {
				setFocus(false);
			}
		});
	});
	function Focus() {
		setFocus(prev => !prev);
	}
	// Constants
	const ClassName = `${sizeState} ${bootstrap} ${disable ? "disabled" : ""} ${
		focus ? "focus" : ""
	}`;
	return (
		<motion.button
			disabled={disable}
			ref={buttonElement}
			className={ClassName}
			onClick={function(e) {
				Focus();
				if (onClick) {
					onClick(e);
				}
			}}
			style={style}
			animate={animate}
			{...params}
		>
			{val}
		</motion.button>
	);
}

export default MainButton;
