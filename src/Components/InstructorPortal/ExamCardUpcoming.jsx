import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

function ExamCardUpcoming({ data, type }) {
	return (
		<div className="d-flex gap-3 p-3 text-light">
			<div className="text-uppercase bg-black bg-opacity-25 pb-1 rounded-bottom">
				<h5 className="mb-0 px-3">{format(new Date(data?.date), "do")}</h5>
				<h5 className="mb-0 px-3">{format(new Date(data?.date), "LLL")}</h5>
				<h5 className="mb-0 px-3 bg_primary rounded-bottom">{format(new Date(data?.date), "iii")}</h5>
			</div>

			<div className="">
				<h4>{data?.name}</h4>
				<p className="m-0">
					<span className="text_primary">Instructor:</span> {` ${data?.firstName || ""} ${data?.lastName || ""}`}
				</p>

				<div className="d-flex justify-content-between align-items-end">
					<h6 className="mb-0">LEV.{data?.level} &#160; exam</h6>

					<h6 className="mb-0">
						<i className="fa-regular fa-clock fa-lg me-2 text-secondary"></i>
						{data?.date && format(new Date(data?.date), "p")}{" "}
					</h6>
				</div>
			</div>

			{type === "instructor" && (
				<Link className="clickable text_primary" href={`/instructor-portal/exams/update-exam/${data?._id}`}>
					<i className="fa-solid fa-pen-to-square fa-lg mt-3"></i>
				</Link>
			)}
		</div>
	);
}

export default ExamCardUpcoming;
