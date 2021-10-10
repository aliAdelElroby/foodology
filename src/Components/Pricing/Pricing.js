import React from "react";
import "./Pricing.scss";
// Import Components
import Bundles from "./Local/Bundles/Bundles";
import Commitment from "./Local/Commitment/Commitment";
import FAQ from "./Local/FAQ/FAQ";
import Footer from "../Global/Footer/Footer";
function Pricing() {
	return (
		<div className="pricing-page">
			<Bundles />
			<Commitment />
			<FAQ />
			<Footer withoutSub={true} />
		</div>
	);
}

export default Pricing;
