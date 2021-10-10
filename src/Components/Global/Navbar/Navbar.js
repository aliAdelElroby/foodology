import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
// Import Components
import StrokeButton from "../StrokeButton/StrokeButton";
import { Link } from "react-router-dom";
import CartItem from "@global/CartItem/CartItem";
import { isAuth as ifIsAuth, auth } from "@helpers";

// Import Assets
import logo from "./assets/logo.svg";
import cartIcn from "./assets/cart.svg";
import menuIcn from "./assets/menu.svg";

// Import Data
import { CartContext } from "@/App";

function Navbar({ menu, list, isAuth = ifIsAuth(), setAuth }) {
	// Context
	const CartItems = useContext(CartContext);

	// States
	const [cartItems, setCartItems] = useState(CartItems.items);
	const [toggleCart, setToggleCart] = useState(false);
	const [toggleUser, setToggleUser] = useState(false);
	useEffect(
		_ => {
			setCartItems(CartItems.items);
		},
		[CartItems.items]
	);
	// Functions
	function Cart() {
		CartItems.update("foods");
		setToggleCart(prev => !prev);
		setToggleUser(false);
	}
	function User() {
		setToggleUser(prev => !prev);
		setToggleCart(false);
	}
	// Maps
	const ListOfElements = list
		? list.map(({ value, href, pc = true }, index) => {
				if (pc) {
					return (
						<li key={index}>
							<Link to={href}>{value}</Link>
						</li>
					);
				} else {
					return false;
				}
		  })
		: null;

	// Maps
	const cartList = cartItems.map(el => {
		return <CartItem key={el.id} data={el} />;
	});
	return (
		<div className="main-navbar d-flex align-items-center">
			<div className="menu" onClick={menu}>
				<img src={menuIcn} alt="menu-icon" />
			</div>
			<div className="logo flex-grow-1">
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
			</div>
			<div className="links">
				<ul>{ListOfElements}</ul>
			</div>
			{!isAuth ? (
				<Link to="/login">
					<StrokeButton val="Sign In" />
				</Link>
			) : (
				<div className="user">
					<div className="icon" onClick={User}>
						<ion-icon name="person" />
					</div>
					<div
						className={`menu-user ${
							toggleUser ? "" : "hide"
						} d-flex flex-column`}
					>
						<div className="name d-flex text-center align-items-center justify-content-center">
							Hello
							<div className="val ms-1">
								{auth()
									.displayName.split(" ")
									.slice(0, 2)
									.join(" ")
									.trim()}
							</div>
						</div>
						<div className="logout d-flex align-items-end justify-content-center">
							<Link
								to="/"
								onClick={_ => {
									User();
									setAuth(false);
								}}
							>
								Logout
							</Link>
						</div>
					</div>
				</div>
			)}
			<div className="cart d-flex align-items-center justify-content-center">
				<img src={cartIcn} alt="cartIcon" onClick={Cart} />
				<div
					className={`menu-cart ${
						toggleCart ? "" : "hide"
					} d-flex flex-column`}
				>
					<div className="list flex-grow-1 h-100">
						{cartList.length > 0 ? (
							cartList
						) : (
							<div className="t5 text-center h-100 d-flex align-items-center">
								There is no food in the cart !
							</div>
						)}
					</div>
					<div className="see-more d-flex align-items-end justify-content-center">
						<Link to="/cart" onClick={Cart}>
							Cart Items
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
