/* Main Structure Is 
	[
		{value, href, ionIcon, icon, pc}
	]
*/
const LinksData = [
	{
		id: 1,
		value: "Home",
		href: `${process.env.REACT_APP_LINK_START_WITH}`,
		ionIcon: "home-outline",
		Icon: null,
		pc: false
	},
	{
		id: 2,
		value: "About",
		href: `${process.env.REACT_APP_LINK_START_WITH}/about`,
		ionIcon: "help-outline",
		Icon: null
	},
	{
		id: 3,
		value: "Foods",
		href: `${process.env.REACT_APP_LINK_START_WITH}/foods`,
		ionIcon: "pizza-outline",
		Icon: null
	},
	{
		id: 4,
		value: "Pricing",
		href: `${process.env.REACT_APP_LINK_START_WITH}/pricing`,
		ionIcon: "pricetags-outline",
		Icon: null
	}
];
export default LinksData;
