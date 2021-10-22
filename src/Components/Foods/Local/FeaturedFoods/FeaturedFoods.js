import "./FeaturedFoods.scss";
// Import Components
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import CategoriesList from "@global/CategoriesList/CategoriesList";
import SelectBox from "@global/SelectBox/SelectBox";
import Counter from "@global/Counter/Counter";
import FoodData from "@global/FoodData/FoodData";
import FoodImages from "@global/FoodImages/FoodImages";

// Import Data
import CategoriesData from "@data/Foods/CategoriesData";
import FoodsData from "@data/Foods/FoodsData";

function FeaturedFoods() {
	// States
	const [Categories] = useState(CategoriesData ? CategoriesData : []);
	const [Foods] = useState(FoodsData || []);
	const [itemsApper, setItemsApper] = useState([]);
	const [dataShow, setDataShow] = useState(null);
	const [autoSelect, setAutoSelect] = useState(null);
	let { id } = useParams();
	let history = useHistory();

	useEffect(
		_ => {
			const setData = id => {
				if (Foods) {
					let result = Foods.filter(element => {
						return parseInt(id) === element.id;
					});
					setDataShow(result[0]);
				}
			};
			if (id) {
				if (Foods.filter(el => el.id === parseInt(id)).length !== 0) {
					let filter = Foods.filter(el => el.id === parseInt(id))[0]
						.filter;
					setAutoSelect(filter);
					setData(id);
				} else {
					history.push(
						`${process.env.REACT_APP_LINK_START_WITH}/404`
					);
				}
			}
		},
		[id, Foods, history]
	);
	// Functions
	function filterItems(filter) {
		setAutoSelect(null);
		if (Foods && filter !== "random") {
			let result = Foods.filter(element => {
				return filter === element.filter;
			});
			setItemsApper(result);
		}
		if (Foods && filter === "random") {
			let result = [];
			for (let i = 0; i < 10; i++) {
				let random = Math.ceil(Math.random() * Foods.length - 1);
				result.push(Foods[random > Foods.length ? random - 1 : random]);
			}
			setItemsApper(result);
		}
	}

	return (
		<section className="featured-foods">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{/* Heading */}
						<div className="heading text-center">
							<h2 className="t2" data-aos="fade-up">
								Today’s featured
							</h2>
							<p
								className="t5 mt-4"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit,
								<br className="d-none d-lg-block" /> sed do
								eiusmod tempor incididunt ut.
							</p>
						</div>
					</div>
				</div>
				{/* Content */}
				<div className="content">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-12 col-lg-5 p-0">
							<div className="set-section">
								<div className="row w-100 m-auto">
									<div className="col-6">
										<div className="main-categories h-100 align-self-end pt-3">
											{/* Main Categories */}
											<div className="list">
												<ul>
													<li>
														<a
															href="#1"
															className="active"
														>
															Main Course
														</a>
													</li>
													<li>
														<a href="#1">
															Dizzerts
														</a>
													</li>
													<li>
														<a href="#1">
															Appetizers
														</a>
													</li>
												</ul>
											</div>
											<Counter end={9} />
										</div>
									</div>
									<div className="col-6 d-flex justify-content-end">
										{/* Categories */}
										<div className="categories">
											<div className="label t5 d-flex align-items-center">
												<ion-icon name="menu-outline" />
												Categories
											</div>
											<SelectBox
												defaultItem="Select Options"
												options={Categories}
												name="food"
												autoSelect={autoSelect} // For Auto Selection On Load With Id Param In Url
												onSelect={filterItems}
											/>
											<CategoriesList
												list={itemsApper}
												style={{
													height: !dataShow
														? "auto"
														: "362px",
													maxHeight: dataShow
														? "auto"
														: "362px"
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className={`col-12 col-sm-12 col-md-12 col-lg-7 ${
								dataShow ? "" : "d-none"
							}`}
						>
							<div className="row h-100">
								<div className="col-12 col-sm-12 col-md-6 col-lg-5">
									<FoodImages
										data={{
											id: dataShow ? dataShow.id : false,
											main: dataShow
												? dataShow.images.main
												: false,
											sub1: dataShow
												? dataShow.images.sub1
												: false,
											sub2: dataShow
												? dataShow.images.sub2
												: false
										}}
									/>
								</div>
								<div className="col-12 col-sm-12 col-md-6 col-lg-7">
									{dataShow ? (
										<FoodData data={dataShow} />
									) : (
										""
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturedFoods;
