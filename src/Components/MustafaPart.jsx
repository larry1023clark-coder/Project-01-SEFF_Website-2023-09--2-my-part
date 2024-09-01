import React from "react";
import { Link } from "react-router-dom";

function MustafaPart() {
	return (
		<div className="container login-container d-flex flex-column justify-content-center align-items-center mx-auto min-vh-100">
			<div className="Login__card d-flex flex-column gap-3 p-4 shadow-lg position-relative bg-black bg-opacity-50 rounded-3">
				<h4>Frontend training</h4>
				<p>Mustafa Abutabl Part</p>

				<Link to="/jobs/create-cv/" className="btn btn-lg btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					create cv
				</Link>

				<Link to="/admin-panel/jobs" className="btn btn-lg btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					admin-panel jobs
				</Link>
				<Link to="/instructor" className="btn btn-lg btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					instructor portal
				</Link>
				<Link to="/student" className="btn btn-lg btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					student portal
				</Link>

				<Link to="/auth/login" className="btn btn-lg btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					SignIn page
				</Link>

				<Link to="/auth/reset-password" className="btn btn-lg btn-primary text-uppercase w-100 fw-bold fs-6 py-10">
					reset password
				</Link>
			</div>
		</div>
	);
}

export default MustafaPart;
