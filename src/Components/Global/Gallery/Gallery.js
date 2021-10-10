import React, { useEffect, useState } from "react";
import "./Gallery.scss";
// Import Compopnents
import { lazy } from "@lazy";
function Gallery({ images }) {
	// States
	const [pc, setPc] = useState(false);

	// Functions
	useEffect(() => {
		if (window.matchMedia("(min-width: 992px)").matches) {
			// If Mobile
			setPc(true);
		}
	}, []);

	// Custom Fuction For Get Two By Two Elements Of Array
	function ForTwo(arr, func) {
		let result = [];
		for (var i = 1; i < arr.length; i += 2) {
			result.push(func(arr[i - 1], arr[i], i - 1, i));
		}
		return result;
	}
	let toggle = false;
	const ImagesInner = ForTwo(images, function(
		prev,
		current,
		indexPrev,
		indexCur
	) {
		if (!toggle) {
			toggle = true;
			return (
				<div className="row" key={indexPrev}>
					<div
						className="col-12 col-sm-12 col-md-12 col-lg-7"
						data-aos={!pc ? "zoom-in" : "fade-right"}
						data-aos-delay={!pc ? 0 : indexPrev * 200}
						data-aos-once={!pc ? false : true}
					>
						<div className="image-item big">
							<lazy.img src={prev} alt="test" />
						</div>
					</div>
					<div
						className="col-12 col-sm-12 col-md-12 col-lg-5 align-self-end d-flex justify-content-start"
						data-aos={!pc ? "zoom-in" : "fade-left"}
						data-aos-delay={!pc ? 0 : indexCur * 200}
						data-aos-once={!pc ? false : true}
					>
						<div className="image-item small ">
							<lazy.img src={current} alt="test" />
						</div>
					</div>
				</div>
			);
		} else {
			toggle = false;
			return (
				<div className="row" key={indexPrev}>
					<div
						className="col-12 col-sm-12 col-md-12 col-lg-5 align-self-start order-2 order-lg-1 d-flex justify-content-end"
						data-aos={!pc ? "zoom-in" : "fade-right"}
						data-aos-delay={!pc ? 0 : indexPrev * 200}
						data-aos-once={!pc ? false : true}
					>
						<div className="image-item small ">
							<lazy.img src={prev} alt="test" />
						</div>
					</div>
					<div
						className="col-12 col-sm-12 col-md-12 col-lg-7 order-1 order-lg-2"
						data-aos={!pc ? "zoom-in" : "fade-left"}
						data-aos-delay={!pc ? 0 : indexCur * 200}
						data-aos-once={!pc ? false : true}
					>
						<div className="image-item big">
							<lazy.img src={current} alt="test" />
						</div>
					</div>
				</div>
			);
		}
	});
	return (
		<section className="Gallery">
			<div className="container">{ImagesInner}</div>
		</section>
	);
}
export default Gallery;
