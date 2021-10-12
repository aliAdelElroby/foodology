import React, { useContext, useState } from "react";
import "./Information.scss";

// Import Components
import MainButton from "@global/MainButton/MainButton";
import InputTime from "@global/InputTime/InputTime";
import EditableDiv from "../../Global/EditableDiv/EditableDiv";

// Import Data
import { CartContext, UserContext } from "@helpers";

function Information() {
	// Constants
	const cartItems = useContext(CartContext);
	const auth = useContext(UserContext);

	const data = {
		shipping: {
			name: auth.get().displayName || "Not Set Yet!",
			address: auth.get().address || "Not Set Yet!",
			phone: auth.get().phone || "Not Set Yet!",
			editable: false
		},
		payment: {
			placeholderName: auth.get().cardPlaceholderName || "Not Set Yet!",
			cardNumber: auth.get().cardNumber || "Not Set Yet!",
			cardDate: auth.get().cardDate || "----",
			editable: false
		}
	};
	// States
	const [editableShipping, setEditableShipping] = useState(false);
	const [editablePayment, setEditablePayment] = useState(false);
	const [shipment] = useState(15);

	// Functions
	function getPrice() {
		if (cartItems.get() && cartItems.get().length) {
			var result = cartItems
				.get()
				.map(el => (el.price ? parseFloat(el.price) : 0))
				.reduce((p, c) => p + c);
		}
		return isNaN(result) ? "Free" : result;
	}
	return (
		<section className="information">
			<div className="shipping">
				<h4 className="headEdit t4 d-flex align-items-center">
					Shipping Information{" "}
					<ion-icon
						name="create-outline"
						onClick={_ => setEditableShipping(true)}
					/>
				</h4>
				<ul className="user-information">
					<li className="name">
						<ion-icon name="person-outline" />
						<EditableDiv
							editable={editableShipping}
							value={data.shipping.name}
						/>
					</li>
					<li className="address t5">
						<ion-icon name="business-outline" />
						<EditableDiv
							editable={editableShipping}
							value={data.shipping.address}
						/>
					</li>
					<li className="phone t5">
						<ion-icon name="call-outline" />
						<EditableDiv
							editable={editableShipping}
							value={data.shipping.phone}
						/>
					</li>
				</ul>
				{editableShipping ? (
					<div className="done mt-3 d-flex justify-content-end">
						<MainButton
							data={{ size: "l", val: "Done" }}
							onClick={_ => setEditableShipping(false)}
						/>
					</div>
				) : (
					""
				)}
			</div>
			<div className="time-delivery">
				<h4 className="headEdit t4 d-flex align-items-center">
					Time Delivery <ion-icon name="create-outline" />
				</h4>
				<InputTime />
			</div>
			<div className="payment">
				<h4 className="headEdit t4 d-flex align-items-center">
					Payment{" "}
					<ion-icon
						name="create-outline"
						onClick={_ => setEditablePayment(true)}
					/>
				</h4>
				<ul className="payment-info">
					<li className="card-info">
						<ion-icon name="card-outline" />
						<EditableDiv
							editable={editablePayment}
							value={data.payment.cardNumber}
							className="me-3 w-75"
						/>
						<EditableDiv
							editable={editablePayment}
							value={data.payment.cardDate}
							className="w-25"
						/>
					</li>
					<li className="address t5">
						<ion-icon name="person-outline" />
						<EditableDiv
							editable={editablePayment}
							value={data.payment.placeholderName}
						/>
					</li>
				</ul>
				{editablePayment ? (
					<div className="done mt-3 d-flex justify-content-end">
						<MainButton
							data={{ size: "l", val: "Done" }}
							onClick={_ => setEditablePayment(false)}
						/>
					</div>
				) : (
					""
				)}
				<div className="price-info">
					<ul>
						<li className="t5">
							Subtotal :{" "}
							<div className="val">
								{!isNaN(getPrice())
									? `$${getPrice()}.00`
									: getPrice()}
							</div>
						</li>
						<li className="t5">
							Shipment :
							<div className="val">
								{!isNaN(shipment)
									? `$${shipment}.00`
									: shipment}
							</div>
						</li>
						<li className="t5 fw-bold">
							Total Price
							<div className="val">
								{!isNaN(getPrice())
									? `$${getPrice() + shipment}.00`
									: getPrice()}
							</div>
						</li>
					</ul>
					<hr className="mt-4 mb-5" />
					<div className="process d-flex justify-content-center justify-content-lg-end">
						<MainButton data={{ size: "l", val: "PROCEED" }} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Information;
