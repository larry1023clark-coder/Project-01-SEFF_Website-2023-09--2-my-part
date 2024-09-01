import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";

function JobsListPagination() {
	const [pageNo, setPageNo] = useState(1);
	return (
		<nav className="mt-5" aria-label="Admin job list pagination">
			<ul className="admin-Joblist-pagination pagination justify-content-center justify-content-lg-end align-items-center">
				<li className="page-item text_primary disabled">
					<Link className="page-link fs-2">
						<TfiArrowCircleLeft />
					</Link>
				</li>
				{[1, 2, 3, "..."].map((page, i) => (
					<li key={i} className={`page-item ${pageNo === i + 1 ? "job-list-active" : ""} `}>
						<Link className="page-link fs-5" to="#">
							{page}
						</Link>
					</li>
				))}

				<li className="page-item text_primary">
					<Link className="page-link fs-2" to="#">
						<TfiArrowCircleRight />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default JobsListPagination;
