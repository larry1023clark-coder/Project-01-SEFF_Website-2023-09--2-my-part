import React from "react";
import { todayDate } from "../../Config/DateToday";

function HomePage() {
	return (
		<div>
			<h2 className="display-1 text-success">homePage</h2>
			<i className="fa-solid fa-igloo"></i>
			<h5>{todayDate}</h5>
		</div>
	);
}

export default HomePage;
