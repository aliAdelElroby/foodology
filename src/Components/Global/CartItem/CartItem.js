import React, { useContext, useReducer, useState } from "react";
import "./CartItem.scss";

// Import Components
import { deleteWithIdFromLocal } from "@helpers";
import { lazy } from "@lazy";

// Import Data
import { CartContext } from "@helpers";

function CartItem({
	data: {
		id,
		headline,
		images: { sub1 }
	}
}) {
	// Context
	const cartItems = useContext(CartContext);

	// States
	const [item] = useState(React.createRef());
	const [deleted, setDeleted] = useState(false);

	// Reducers
	const initalStatus = false;
	const reducer = (state, action) => {
		const cartItem = item.current;
		let touchLocation = action.touches.targetTouches[0];
		switch (action.name) {
			case "start":
				return "dragging";
			case "move":
				cartItem.style.position = "fixed";
				cartItem.style.left = touchLocation.clientX + "px";
				cartItem.style.top = touchLocation.clientY + "px";
				document.body.classList.add("no-scroll");
				document
					.getElementById("overlay-delete")
					.classList.add("active");
				return "dragging";
			case "end":
				if (parseInt(cartItem.style.top) > window.screen.height - 200) {
					setDeleted(true);
					deleteWithIdFromLocal(id, "foods");
					cartItems.update();
				}
				cartItem.style.position = "static";
				document
					.getElementById("overlay-delete")
					.classList.remove("active");
				document.body.classList.remove("no-scroll");
				return false;
			default:
				return initalStatus;
		}
	};
	const [status, drag] = useReducer(reducer, initalStatus);
	return !deleted ? (
		<div
			className={`cart-item d-flex w-100 align-items-center ${status}`}
			draggable="true"
			ref={item}
			onTouchStart={e => drag({ name: "start", touches: e })}
			onTouchMove={e => drag({ name: "move", touches: e })}
			onTouchEnd={e => drag({ name: "end", touches: e })}
		>
			<div className="image d-flex align-items-center justify-content-center me-3">
				<lazy.img src={sub1} alt="cartItem" />
			</div>
			<div className="headline">{headline}</div>
		</div>
	) : (
		""
	);
}

export default CartItem;
