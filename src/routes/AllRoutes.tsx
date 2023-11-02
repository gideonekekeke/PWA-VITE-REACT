import { createBrowserRouter } from "react-router-dom";
import Weblayout from "../Header/Weblayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const Index = createBrowserRouter([
	{
		path: "/",
		element: <Weblayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},

			{
				path: "about",
				element: <About />,
			},

			{
				path: "contact",
				element: <Contact />,
			},
		],
	},
]);

export default Index;
