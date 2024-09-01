import React from 'react';

function AdminSectionsSearchBar({ section }) {
	return (
		<div className="d-none d-lg-flex justify-content-between mt-5">
			<h5 className="head-page-title text-capitalize fs-5">{section}</h5>

			<div className="admin-job-search bg_input rounded-pill d-flex align-items-center px-4">
				<input
					className="form-control rounded-pill bg-transparent text-light"
					type="text"
					placeholder={`Search in ${section}`}
					aria-label={`Search in ${section}`}
				/>
				<div className="text_primary px-2 clickable">
					<i className="fa-solid fa-magnifying-glass" />
				</div>
			</div>
		</div>
	);
}

export default AdminSectionsSearchBar;
