import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

function CourseCardEarnedCertificates({ data }) {
	return (
		<div className="card p-3 bg-black bg-opacity-25 text-light">
			<div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
				<div>
					<h4>{data?.name}</h4>

					<div className="d-flex column-gap-3  flex-wrap">
						<p className="m-0">
							<span className="text_primary">Instructor:&#160;</span>
							{` ${data?.Instructor?.firstName || ''} ${
								data?.Instructor?.lastName || ''
							}`}
						</p>

						<p className="m-0">
							<span className="text_primary">Date Acquired: &#160;</span>
							{data?.earnedDate &&
								format(new Date(data?.earnedDate), 'EEEE, LLLL do')}
						</p>
					</div>
				</div>

				<div className=" ms-auto ms-lg-0">
					<Link className="btn btn-primary px-3" to={data?.link}>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CourseCardEarnedCertificates;
