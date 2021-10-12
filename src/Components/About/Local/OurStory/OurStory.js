import React from "react";
import "./OurStory.scss";
import Gallery from "@global/Gallery/Gallery";
function OurStory() {
	return (
		<section className="OurStory">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{/* Heading */}
						<div className="heading text-center">
							<div className="title-top">GALERY</div>
							<h2 className="t2 mt-3 mb-5">Our story</h2>
							<p className="t5">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit,
								<br /> sed do eiusmod tempor incididunt ut.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Gallery Component */}
			<div className="con-gallery">
				<Gallery
					images={[
						`${
							process.env.REACT_APP_LINK_START_WITH
						}/assets/about/Pic1.jpg`,
						`${
							process.env.REACT_APP_LINK_START_WITH
						}/assets/about/Pic2.jpg`,
						`${
							process.env.REACT_APP_LINK_START_WITH
						}/assets/about/Pic3.jpg`,
						`${
							process.env.REACT_APP_LINK_START_WITH
						}/assets/about/Pic4.jpg`
					]}
				/>
			</div>
		</section>
	);
}

export default OurStory;
