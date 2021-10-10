import React, { useContext } from "react";
import "./ItemsPayment.scss";
// Import Components
import { lazy } from "@lazy";
// Import Data
import { CartContext } from "@/App";
function ItemsPayment() {
	// Constants
	const CartItems = useContext(CartContext);

	// Maps
	const CartItemsApper = CartItems.items.map(
		({ id, images: { sub1 }, headline, price = "$10" }, index) => {
			return (
				<div
					className="col-4"
					data-aos="fade-up"
					data-aos-delay={index * 200}
					data-aos-offset="0"
					key={id}
				>
					<div className="item d-flex flex-column align-items-center text-center">
						<div className="image w-100 overflow-hidden d-flex flex-column align-items-center justify-content-center">
							<lazy.img src={sub1} alt="CartItem" />
						</div>
						<div className="headline mt-4">{headline}</div>
						<div className="price t5 mt-2">${price}.00</div>
					</div>
				</div>
			);
		}
	);
	return (
		<section className="items-payment">
			<div className="row">
				<div className="heading text-center">
					<h2 className="t2">Items & Payment</h2>
					<div className="title-top mt-4">
						{CartItems.items.length || "no"} items
					</div>
				</div>
			</div>
			<div className="list">
				<div className="row">{CartItemsApper}</div>
			</div>
		</section>
	);
}

export default ItemsPayment;
