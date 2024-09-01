import React from "react";

function LoadingSpanner() {
	return (
		<div className="spinner-border text_primary mx-auto my-5" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	);
}

export default LoadingSpanner;
