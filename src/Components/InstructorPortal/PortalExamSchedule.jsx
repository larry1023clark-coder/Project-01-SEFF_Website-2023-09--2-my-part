import React from "react";

function PortalExamSchedule({ data }) {
	const todatExams = data?.exams?.filter((exam) => new Date(exam?.date) > Date.now());

	return (
		<div
			className="d-flex align-items-center gap-2 fs-4 text-uppercase p-4 bg-secondary bg-opacity-25 rounded"
			style={{ width: "fit-content" }}
		>
			<i className="fa-regular fa-circle-check fa-xl"></i>
			ALL CLEAR, YOU DON'T HAVE ANY EXAMS TODAY.
		</div>
	);
}

export default PortalExamSchedule;
