import React from "react";
import { Link } from "react-router-dom";

function CourseCardOngoing({ data, type = "student" }) {
	return (
		<div className="card p-3 bg-black bg-opacity-25 text-light">
			<h4>{data?.name}</h4>
			{type === "student" && (
				<p className="m-0">
					<span className="text_primary">Instructor:</span>
					{` ${data?.Instructor?.firstName || ""} ${data?.Instructor?.lastName || ""}`}
				</p>
			)}
			<div className="d-flex justify-content-between align-items-end mt-4">
				<h3 className="mb-0">LEV.{data?.level}</h3>
				{type === "instructor" && (
					<h6 className="mb-0">
						<i className="fa-regular fa-user me-2 text_primary"></i>
						{data?.enrolledStudents} students
					</h6>
				)}

				<Link className="btn btn-primary px-3" to={`/instructor-portal/courses/${data?._id}`}>
					View Details
				</Link>
			</div>
		</div>
	);
}

export default CourseCardOngoing;
