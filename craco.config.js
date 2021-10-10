const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src/"),
			"@c": path.resolve(__dirname, "src/Components"),
			"@global": path.resolve(__dirname, "src/Components/Global"),
			"@home": path.resolve(__dirname, "src/Components/Home"),
			"@about": path.resolve(__dirname, "src/Components/About"),
			"@login": path.resolve(__dirname, "src/Components/Login"),
			"@pricing": path.resolve(__dirname, "src/Components/Pricing"),
			"@foods": path.resolve(__dirname, "src/Components/Foods"),
			"@cart": path.resolve(__dirname, "src/Components/Cart"),
			"@SassVars": path.resolve(__dirname, "src/Sass/_Vars.scss"),
			"@helpers": path.resolve(__dirname, "src/Custom/Helpers.js"),
			"@lazy": path.resolve(__dirname, "src/Custom/Lazy.js"),
			"@data": path.resolve(__dirname, "src/Data/")
		}
	},
	plugins: [
		{
			plugin: require("craco-plugin-scoped-css")
		}
	]
};
