import React, { useEffect, useState } from "react";

// Import Components
import Load from "../Components/Global/Load/Load";
function lazy({ children }) {
	return <React.Fragment>{children}</React.Fragment>;
}

function Img({ src, alt, loading = true, loadDelay = 0, ...attrs }) {
	// States
	const [imgNotLoad] = useState(new Image());
	const [img, setImg] = useState(null);
	const [load, setLoad] = useState(true);

	// Functions
	useEffect(_ => {
		imgNotLoad.src = src;
		imgNotLoad.onload = () => {
			setImg(src);
			setTimeout(_ => setLoad(false), loadDelay);
		};
	});

	return (
		<>
			{loading && load ? (
				<Load />
			) : (
				<img src={img} alt={alt} {...attrs} />
			)}
		</>
	);
}

function Div({ children, src, loading = false, loadDelay = 0, ...attrs }) {
	// States
	const [imgNotLoad] = useState(new Image());
	const [img, setImg] = useState(null);
	const [load, setLoad] = useState(true);

	// Functions
	useEffect(_ => {
		imgNotLoad.src = src;
		imgNotLoad.onload = () => {
			setImg(src);
			setTimeout(_ => setLoad(false), loadDelay);
		};
	});

	return (
		<>
			{loading && load ? <Load /> : ""}
			<div {...attrs} style={{ backgroundImage: `url(${img})` }}>
				{children}
			</div>
		</>
	);
}

lazy.img = Img;
lazy.div = Div;

export { lazy };
