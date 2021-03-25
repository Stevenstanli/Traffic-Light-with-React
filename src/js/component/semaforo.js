import React, { useState } from "react";

//create your first component
export function Semaforo() {
	const [active, setActive] = useState("");

	const colorShadow = event => {
		setActive(event.target.className);
	};

	return (
		<div className="text-center mt-5 center1">
			<div className="trafficLight">
				<div
					className={
						"redLight" + (active === "redLight" ? "Active" : "")
					}
					onClick={colorShadow}></div>
				<div
					className={
						"orangeLight" +
						(active === "orangeLight" ? "Active" : "")
					}
					onClick={colorShadow}></div>
				<div
					className={
						"greenLight" + (active === "greenLight" ? "Active" : "")
					}
					onClick={colorShadow}></div>
			</div>
		</div>
	);
}
