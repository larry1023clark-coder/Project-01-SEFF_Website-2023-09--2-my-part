import React from "react";
import { Link } from "react-router-dom";

function BackToHomeGlobal() {
	return (
		<div className="relative">
			<div className="position-absolute top-0 end-0 m-5">
				<Link to="/" className="btn btn-primary shadow-lg">
					<i className="fas fa-home me-2"></i>
					back to home
				</Link>
			</div>
		</div>
	);
}

export default BackToHomeGlobal;
