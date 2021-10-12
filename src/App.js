import React, { useState } from "react";
import "./Sass/App.scss";
// Import Components
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@global/Navbar/Navbar";
import Home from "@home/Home";
import Login from "@login/Login";
import Menu from "@global/Menu/Menu";
import Pricing from "@pricing/Pricing";
import About from "@about/About";
import Foods from "@foods/Foods";
import Cart from "@cart/Cart";
import OverlayDelete from "@global/OverlayDelete/OverlayDelete";
import Helpers from "@helpers";

// Import Data
import LinksData from "@data/Links/Links";

// Import Aos Libarary
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
	offset: 200
});

function App() {
	// States
	const [settings, setSettings] = useState({
		active: false,
		widthMenu: 0,
		transition: "all 200ms"
	});

	// Functions
	function MenuOpen() {
		if (!settings.active) {
			setSettings(({ transition }) => {
				return {
					widthMenu: "250px",
					active: true,
					transition
				};
			});
			document.body.classList.add("no-scroll");
		} else {
			setSettings(({ transition }) => {
				return {
					widthMenu: 0,
					active: false,
					transition
				};
			});
			document.body.classList.remove("no-scroll");
		}
	}
	return (
		<BrowserRouter>
			<div className="App">
				<OverlayDelete />
				<Helpers>
					<Menu
						data={{
							list: LinksData,
							transition: settings.transition,
							width: settings.widthMenu,
							active: settings.active
						}}
					/>
					<div
						style={{
							transition: settings.transition,
							marginLeft: settings.widthMenu,
							overflow: "hidden",
							width: "100%"
						}}
					>
						<div className="container">
							<Navbar menu={MenuOpen} list={LinksData} />
						</div>

						<Route
							path={`${process.env.REACT_APP_LINK_START_WITH}/`}
							exact
							component={Home}
						/>
						<Route
							path={`${
								process.env.REACT_APP_LINK_START_WITH
							}/login`}
						>
							<Login />
						</Route>
						<Route
							path={`${
								process.env.REACT_APP_LINK_START_WITH
							}/pricing`}
							component={Pricing}
						/>
						<Route
							path={`${
								process.env.REACT_APP_LINK_START_WITH
							}/about`}
							component={About}
						/>
						<Route
							path={`${
								process.env.REACT_APP_LINK_START_WITH
							}/foods/:id?`}
							component={Foods}
						/>
						<Route
							path={`${
								process.env.REACT_APP_LINK_START_WITH
							}/cart`}
							component={Cart}
						/>
					</div>
				</Helpers>
			</div>
		</BrowserRouter>
	);
}

export default App;
