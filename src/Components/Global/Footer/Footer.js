import React from "react";
import "./Footer.scss";
// Import Components
import MainButton from "../MainButton/MainButton";
import { lazy } from "@lazy";

// Import Assets
import bg from "./assets/image.jpg";

function Footer({ withoutSub }) {
	return (
		<div className="main-footer">
			<div className="container">
				{!withoutSub ? (
					<div className="row">
						<div className="col-12">
							<div className="subscribe">
								<div className="content">
									<lazy.div className="bg" src={bg} />
									<div className="title-top">SUBSCRIBE</div>
									<h3 className="t2">
										Perfect Solutions <br />
										for Your Foods
									</h3>
									<p className="t5">
										Lorem ipsum dolor sit amet, consectetur
										<br />
										adipiscing elit, sed do eiusmod.
									</p>
									<MainButton
										data={{
											size: "l",
											val: "Subscribe"
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				) : (
					""
				)}
				<div className="footer-content">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 col-lg-8">
							<div className="social-media align-self-end">
								<ul>
									<li>
										<a href="#1" className="twitter">
											<ion-icon name="logo-twitter" />
										</a>
									</li>
									<li>
										<a href="#2" className="facebook">
											<ion-icon name="logo-facebook" />
										</a>
									</li>
									<li>
										<a href="#3" className="google">
											<ion-icon name="logo-google" />
										</a>
									</li>
									<li>
										<a href="#4" className="instagram">
											<ion-icon name="logo-instagram" />
										</a>
									</li>
								</ul>
							</div>
							<div className="copyright">
								© 2021 Foodology. All rights reserved
								<br /> && Codding With{" "}
								<a href="https://www.freelancer.com/u/aliadelelroby">
									Ali Elroby
								</a>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-6 col-lg-4">
							<div className="links d-flex flex-column justify-content-end">
								<div className="links links d-flex ">
									<div className="foods">
										<div className="headline">Foods</div>
										<ul>
											<li>
												<a href="#2">Pricing</a>
											</li>
											<li>
												<a href="#2">Menus</a>
											</li>
										</ul>
									</div>
									<div className="help">
										<div className="headline">Help</div>
										<ul>
											<li>
												<a href="#2">About</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="important-links">
									<ul>
										<li>
											<a href="#2">Privacy Policy</a>
										</li>
										<li>
											<a href="#2">Terms & Conditions</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
