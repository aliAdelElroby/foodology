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
import {
	getItemsWithId,
	getLocalData,
	isAuth,
	setUserInLocal,
	logout
} from "@helpers";

// Import Data
import LinksData from "@data/Links/Links";
import Foodsdata from "@data/Foods/FoodsData";
import users from "@data/Users/Users";

// Import Aos Libarary
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
	offset: 200
});

// Context
export const FoodsContext = React.createContext();
export const CartContext = React.createContext();
export const UserContext = React.createContext();

function App() {
	// States
	const [FoodsdataApper] = useState(Foodsdata || []);
	const [cartItems, setCartItems] = useState(
		getItemsWithId(getLocalData("foods"), Foodsdata)
	);
	const [isAuthApp, setIsAuth] = useState(isAuth());
	const [settings, setSettings] = useState({
		active: false,
		widthMenu: 0,
		transition: "all 200ms"
	});

	// Functions
	function setAuth(data) {
		if (data === false) {
			logout();
			setIsAuth(false);
		} else {
			setUserInLocal(data);
			setIsAuth(true);
		}
	}
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
	function update(name) {
		if (name) {
			setCartItems(getItemsWithId(getLocalData(name), Foodsdata));
		}
	}
	return (
		<BrowserRouter>
			<div className="App">
				<OverlayDelete />
				<UserContext.Provider value={users || []}>
					<FoodsContext.Provider value={FoodsdataApper}>
						<CartContext.Provider
							value={{
								update: update,
								items: cartItems
							}}
						>
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
									<Navbar
										menu={MenuOpen}
										list={LinksData}
										isAuth={isAuthApp}
										setAuth={setAuth}
									/>
								</div>

								<Route path="/" exact component={Home} />
								<Route path="/login">
									<Login setAuth={setAuth} />
								</Route>
								<Route path="/pricing" component={Pricing} />
								<Route path="/about" component={About} />
								<Route path="/foods/:id?" component={Foods} />
								<Route path="/cart" component={Cart} />
							</div>
						</CartContext.Provider>
					</FoodsContext.Provider>
				</UserContext.Provider>
			</div>
		</BrowserRouter>
	);
}

export default App;
