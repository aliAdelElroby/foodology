import React from "react";
import "./Header.scss";

// Import Components
import MainButton from "../../../Global/MainButton/MainButton";
import { lazy } from "../../../../Custom/Lazy";

// Import Assets
import imgHeader from "./assets/imgHeader.png";

function Header() {
	return (
		<div className="main-header">
			<div className="content-header">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-12 col-lg-6">
							<div className="content">
								<div className="title-top">
									Changing your catering way
								</div>
								<h1 className="t1">
									Perfect Foods
									<br /> <span>Better Live</span>
								</h1>
								<p className="t5">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit sed do. rong para duija
									naago conporat der Andomo lakoc amet aven.
								</p>
								<MainButton
									data={{
										size: "l",
										val: "Subscribe",
										disable: false
									}}
								/>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-12 col-lg-6 position-relative">
							<div className="bg-photo" />
							<div className="photo">
								<lazy.img src={imgHeader} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
