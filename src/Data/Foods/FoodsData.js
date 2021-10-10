/* Main Structure Is 
	[
		{id, headline, desc, calories, images, price, quantity, Ingredients, filter}
	]
*/

const FoodsData = [
	{
		id: 1,
		headline: "Chicken Parmesan",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "70gr - Chicken",
		images: {
			main: "/assets/foods/meat1-main.png",
			sub1: "/assets/foods/meat1.jpg"
		},
		price: 15,
		quantity: 10,
		ingredients: "",
		filter: "meat"
	},
	{
		id: 2,
		headline: "Chicken Fried Rice",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: {
			main: "/assets/foods/meat2.jpg",
			sub1: "/assets/foods/meat2.jpg"
		},
		price: 18,
		quantity: 30,
		ingredients: "",
		filter: "meat"
	},
	{
		id: 3,
		headline: "Barbeque Steak",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: ["/assets/foods/meat2.jpg"],
		price: 20,
		quantity: 2,
		ingredients: "",
		filter: "meat"
	},
	{
		id: 4,
		headline: "Smoked Beef Bulgogi",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "meat"
	},
	{
		id: 5,
		headline: "a",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: {
			main: "/assets/foods/v1.jpg",
			sub1: "/assets/foods/v1.jpg"
		},
		price: 10,
		ingredients: "",
		filter: "vegetables"
	},
	{
		id: 6,
		headline: "b",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "vegetables"
	},
	{
		id: 7,
		headline: "c",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "vegetables"
	},
	{
		id: 8,
		headline: "d",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "meat"
	},
	{
		id: 9,
		headline: "f",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "meat"
	},
	{
		id: 10,
		headline: "g",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "meat"
	},
	{
		id: 11,
		headline: "e",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "meat"
	},
	{
		id: 12,
		headline: "1",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "meat"
	},
	{
		id: 13,
		headline: "3",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "meat"
	},
	{
		id: 14,
		headline: "4",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "meat"
	},
	{
		id: 15,
		headline: "f",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: "",
		filter: "vegetables"
	},
	{
		id: 16,
		headline: "c",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: ""
	},
	{
		id: 17,
		headline: "d",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: ""
	},
	{
		id: 18,
		headline: "s",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: ""
	},
	{
		id: 19,
		headline: "a",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: ""
	},
	{
		id: 20,
		headline: "H",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: ""
	},
	{
		id: 21,
		headline: "B",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: ""
	},
	{
		id: 22,
		headline: "F",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: ""
	},
	{
		id: 23,
		headline: "D",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: ""
	},
	{
		id: 24,
		headline: "K",
		desc:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
		calories: "",
		images: [],
		price: "",
		ingredients: ""
	}
];
export default FoodsData;
