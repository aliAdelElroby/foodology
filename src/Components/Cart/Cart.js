import React from "react";
import "./Cart.scss";
import Footer from "@global/Footer/Footer";
import ItemsPayment from "./Local/ItemsPayment/ItemsPayment";
import Information from "./Local/Information/Information";
function Cart() {
	return (
		<div className="cart-page">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-7">
						<ItemsPayment />
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-5">
						<Information />
					</div>
				</div>
			</div>
			<Footer withoutSub={true} />
		</div>
	);
}

export default Cart;
