import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { registerSW } from "virtual:pwa-register";
import { RouterProvider } from "react-router-dom";
import Index from "./routes/AllRoutes.tsx";

const updateSW = registerSW({
	onNeedRefresh() {
		if (confirm("New content available. Reload?")) {
			updateSW(true);
		}
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
    <div>With PWA</div>
		<RouterProvider router={Index} />
	</React.StrictMode>,
);
