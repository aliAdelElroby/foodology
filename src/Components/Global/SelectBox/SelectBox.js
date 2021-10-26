import React, { useEffect, useState } from "react";
import "./SelectBox.scss";
function SelectBox({
	options,
	defaultItem,
	name,
	onSelect = null,
	autoSelect = null
}) {
	// States
	const [isFocus, setIsFocus] = useState(false),
		[selectBox] = useState(React.createRef()),
		[MainSelect] = useState(React.createRef()),
		[slider] = useState(React.createRef()),
		[icon] = useState(React.createRef()),
		[selected, setSelected] = useState(null),
		[id] = useState(name);

	// Functions
	useEffect(() => {
		window.addEventListener("click", e => {
			if (
				isFocus &&
				selectBox.current !== e.target &&
				icon.current !== e.target
			) {
				setIsFocus(false);
			}
		});
		if (autoSelect) {
			autoSelected();
		}
	});
	function focus() {
		setIsFocus(prev => {
			return !prev;
		});
	}
	function autoSelected() {
		const optionsWithoutDefault = Array.from(
			MainSelect.current.children
		).slice(1);
		for (let i = 0; i < optionsWithoutDefault.length; i++) {
			if (optionsWithoutDefault[i].getAttribute("data") === autoSelect) {
				setSelected(optionsWithoutDefault[i].textContent);
				optionsWithoutDefault[i].setAttribute("selected", true);
				MainSelect.current.value = autoSelect;
				if (onSelect) {
					setTimeout(_ => {
						onSelect(
							autoSelect,
							optionsWithoutDefault[i].textContent,
							MainSelect.current
						);
					}, 1000);
				}
			} else {
				optionsWithoutDefault[i].removeAttribute("selected");
			}
		}
	}
	function changeSelected(e) {
		const optionsWithoutDefault = Array.from(
			MainSelect.current.children
		).slice(1);
		if (e.target.className.includes("select-item")) {
			for (let i = 0; i < optionsWithoutDefault.length; i++) {
				if (
					optionsWithoutDefault[i].getAttribute("data") ===
					e.target.getAttribute("data")
				) {
					setSelected(e.target.textContent);
					optionsWithoutDefault[i].setAttribute("selected", true);
					e.target.classList.add("active");
					MainSelect.current.value = e.target.getAttribute("data");
					if (onSelect) {
						setTimeout(_ => {
							onSelect(
								e.target.getAttribute("data"),
								e.target.textContent,
								MainSelect.current
							);
						}, 300);
					}
				} else {
					optionsWithoutDefault[i].removeAttribute("selected");
					slider.current.children[i].classList.remove("active");
				}
			}
		}
	}

	// Maps
	const optionsApper = options.map((el, index) => {
		const filterDefault = el.value
			.toLowerCase()
			.split(" ")
			.join("-");
		return (
			<option
				value={el.value}
				key={index}
				data={el.filter ? el.filter : filterDefault}
			>
				{el.value}
			</option>
		);
	});
	const sliderItems = options.map((el, index) => {
		const filterDefault = el.value
			.toLowerCase()
			.split(" ")
			.join("-");
		return (
			<div
				className="select-item"
				key={index}
				data={el.filter ? el.filter : filterDefault}
			>
				{el.value}
			</div>
		);
	});

	// Template
	return (
		<div
			className={`SelectBox ${isFocus ? "isFocus" : ""}`}
			onClick={focus}
			ref={selectBox}
		>
			{selected ? selected : defaultItem}
			<ion-icon ref={icon} name="chevron-down-outline" />
			<div
				className="con"
				style={{
					maxHeight: isFocus
						? `${slider.current.clientHeight}px`
						: "0px"
				}}
			>
				<div className="slider" ref={slider} onClick={changeSelected}>
					{sliderItems}
				</div>
			</div>
			<select name={name} id={id} ref={MainSelect}>
				<option label={defaultItem}>{defaultItem}</option>
				{optionsApper}
			</select>
		</div>
	);
}

export default SelectBox;
