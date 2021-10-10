import React, { useEffect, useReducer, useState } from "react";
import Feature from "../Feature/Feature";
import "./MenuList.scss";

function MenuList({ data: { headline, desc, list: data } = [] }) {
	// States
	const [dataAppear, setDataAppear] = useState([]);
	// Reducers
	const initialState = {
		start: 0,
		limit: 3,
		end: 3
	};
	const reducer = ({ start, end, limit }, action) => {
		if (end !== data.length && action === "next") {
			return {
				start: start + limit,
				end: end + limit,
				limit
			};
		} else if (start !== 0 && action === "back") {
			return {
				start: start - limit,
				end: end - limit,
				limit
			};
		} else {
			return { start, end, limit };
		}
	};
	const [numbers, run] = useReducer(reducer, initialState);

	// Constants
	const { start, end } = numbers;

	// Functions
	useEffect(() => {
		setDataAppear(data.slice(start, end));
	}, [data, start, end]);

	// Maps
	const list = dataAppear.map((el, i) => {
		return <Feature data={el} key={el.id} delay={i * 300} />;
	});

	return (
		<div className="menu-list">
			<div className="head">
				<h4 className="t4">{headline}</h4>
				<p className="t5">{desc}</p>
			</div>
			<div className="list d-flex flex-column align-items-end">
				{list}
			</div>
			<div className="controls d-flex justify-content-end">
				<div
					className={`back ${start === 0 ? "disable" : ""}`}
					onClick={_ => run("back")}
				>
					<i className="fas fa-arrow-left" />
				</div>
				<div
					className={`next ${end === data.length ? "disable" : ""}`}
					onClick={_ => run("next")}
				>
					<i className="fas fa-arrow-right" />
				</div>
			</div>
		</div>
	);
}

export default MenuList;
