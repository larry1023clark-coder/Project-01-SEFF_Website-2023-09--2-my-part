import React from 'react';
import { Link } from 'react-router-dom';

function LoginModal() {
	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Launch demo modal
			</button>

			<div
				className="loginModal modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered px-2">
					<div className="modal-content ">
						<div className="modal-content bg_gray-opc border-0">
							<div className=" ms-auto me-3 py-2">
								<button
									type="button"
									className="btn-close text_primary"
									data-bs-dismiss="modal"
									aria-label="Close"
									style={{ backgroundImage: 'none' }}
								>
									<i className="fa-solid fa-xmark fa-xl" />
								</button>
							</div>
							<div className="modal-body d-flex flex-column flex-sm-row justify-content-between gap-3 mb-4 mx-4">
								<h6>Please! Login to view this page</h6>
								<Link
									to="/login"
									data-bs-dismiss="modal"
									className="btn btn-primary text-uppercase px-5"
								>
									LOGIN
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginModal;
