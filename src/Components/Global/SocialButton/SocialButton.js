import React from "react";
import "./SocialButton.scss";

function SocialButton({
	data: { icon, val, bootstrap, aos, aosDelay },
	...params
}) {
	return (
		<div
			className={`social-button ${bootstrap}`}
			data-aos={aos ? aos : false}
			data-aos-delay={aosDelay ? aosDelay : false}
			{...params}
		>
			<button className="d-flex align-items-center p-2">
				<div className="icon">
					<img src={icon} alt="icon" />
				</div>
				<div className="val flex-grow-1">{val}</div>
			</button>
		</div>
	);
}

export default SocialButton;
