import React, { useEffect, useState } from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";
function Menu({ data: { transition, width, list, active } }) {
	// States
	const [ul] = useState(React.createRef());
	useEffect(() => {
		let lis = document.querySelectorAll(".menu-slide .menu-list ul li");
		if (!active) {
			lis.forEach(el => {
				if (el.children[0].className.includes("active")) {
					el.children[0].classList.add("no-borders");
				}
			});
		} else {
			lis.forEach(el => {
				if (el.children[0].className.includes("active")) {
					el.children[0].classList.remove("no-borders");
				}
			});
		}
	});
	// Maps
	const ListOfElements = list
		? list.map(
				(
					{
						value = "No name",
						href = "#",
						ionIcon = null,
						icon = null
					},
					index
				) => {
					return (
						<li key={index}>
							<NavLink to={href} exact={true}>
								<span />
								<span />
								{ionIcon ? <ion-icon name={ionIcon} /> : false}
								{icon && !ionIcon ? (
									<img src={icon} alt="icon" />
								) : (
									false
								)}
								{value}
							</NavLink>
						</li>
					);
				}
		  )
		: false;
	return (
		<div
			className="menu-slide d-flex align-items-center"
			style={{ transition: transition, width: width }}
		>
			<div className="menu-list">
				<ul ref={ul}>{ListOfElements}</ul>
			</div>
		</div>
	);
}

export default Menu;
