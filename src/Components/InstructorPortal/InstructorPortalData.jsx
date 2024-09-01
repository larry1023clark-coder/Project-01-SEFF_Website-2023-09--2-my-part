import React from "react";
import InstructorInfoBar from "./instructorInfoBar";
import CourseCardOngoing from "./CourseCardOngoing";
import CourseCardUpcoming from "./CourseCardUpcoming";
import { Link } from "react-router-dom";
import ExamCardUpcoming from "./ExamCardUpcoming";
import PortalExamSchedule from "./PortalExamSchedule";

function InstructorPortalInfo({ data, type = "instructor" }) {
	const ongoingCourses = data?.registeredCourses?.filter((course) => course?.status === "ongoing");
	const upcomingCourses = data?.registeredCourses?.filter((course) => course?.status === "upcoming");
	const completedCourses = data?.registeredCourses?.filter((course) => course?.status === "ended");
	const upcomingExams = data?.exams?.filter((exam) => new Date(exam?.date) > Date.now());

	return (
		<div className="container text-capitalize d-flex flex-column gap-4">
			<div className="d-flex justify-content-between mb-3">
				<h3>
					welcome Back <span className="text_primary">{` ${data?.firstName || ""} ${data?.lastName || ""}`}</span>{" "}
				</h3>

				<Link className="btn btn-primary px-3 flex-shrink-0" to={`/user/profile/${data?._id}`}>
					View Profile
				</Link>
			</div>

			<InstructorInfoBar
				ongoingCourses={ongoingCourses}
				completedCourses={completedCourses}
				upcomingExams={upcomingExams}
			/>
			<PortalExamSchedule data={data?.exams} />

			<div className="row justify-content-between my-5">
				<div className="col-12 col-lg-5 ">
					<div>
						<h3 className="mb-4">Ongoing courses</h3>
						<div className="d-flex flex-column gap-4">
							{ongoingCourses?.length < 1
								? "Your Ongoing Courses is empty now"
								: ongoingCourses?.map((course) => (
										<CourseCardOngoing key={course?.id} data={course} type={type} />
								  ))}
						</div>
					</div>
				</div>

				<div className="col-12 col-lg-5 mt-5 mt-lg-0">
					<div>
						<div className="d-flex justify-content-between">
							<h3 className="mb-4">Upcoming Exams</h3>
							{type === "instructor" && (
								<Link className="btn btn-primary px-3 height-fit" to="/instructor-portal/exams/create-exam">
									CREATE NEW
								</Link>
							)}
						</div>
						<div className="d-flex flex-column gap-4">
							{upcomingExams?.length < 1
								? "Your Upcoming Exams is empty now"
								: upcomingExams?.map((exam) => <ExamCardUpcoming key={exam.id} data={exam} type={type} />)}
						</div>
					</div>
				</div>
			</div>

			<div className="my-5">
				<h3 className="mb-4">upcoming courses</h3>
				<div className="row g-3">
					{upcomingCourses?.length < 1
						? "Your Upcoming courses is empty now"
						: upcomingCourses?.map((course) => (
								<div className="col-12 col-lg-6" key={course?.id}>
									<CourseCardUpcoming data={course} />
								</div>
						  ))}
				</div>
			</div>
		</div>
	);
}

export default InstructorPortalInfo;
