import React from 'react';

import { Link } from 'react-router-dom';
import InstructorInfoBar from '../InstructorPortal/instructorInfoBar';
import PortalExamSchedule from '../InstructorPortal/PortalExamSchedule';
import CourseCardOngoing from '../InstructorPortal/CourseCardOngoing';
import ExamCardUpcoming from '../InstructorPortal/ExamCardUpcoming';
import CourseCardEarnedCertificates from '../InstructorPortal/CourseCardEarnedCertificates';

function StudentPortalData({ data, type = 'student' }) {
	const ongoingCourses = data?.registeredCourses.filter(
		(course) => course?.status === 'ongoing'
	);
	const registeredCourses = data?.registeredCourses.filter(
		(course) => course?.status === 'ongoing' || course?.status === 'upcoming'
	);
	const completedCourses = data?.registeredCourses.filter(
		(course) => course.status === 'ended'
	);
	const upcomingExams = data?.exams.filter((exam) => new Date(exam.date) > Date.now());

	return (
		<div className="container text-capitalize d-flex flex-column gap-4">
			<div className="d-flex justify-content-between mb-3">
				<h3>
					welcome Back{' '}
					<span className="text_primary">{` ${data?.firstName || ''} ${
						data?.lastName || ''
					}`}</span>{' '}
				</h3>

				<Link
					className="btn btn-primary px-3 flex-shrink-0"
					to={`/user/profile/${data?.id}`}
				>
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
						<h3 className="mb-4">Registered Courses</h3>
						<div className="d-flex flex-column gap-4">
							{registeredCourses?.length < 1
								? 'You not Registered to any Courses now'
								: registeredCourses?.map((course) => (
										<CourseCardOngoing
											key={course?._id}
											data={course}
											type={type}
										/>
								  ))}
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-5 mt-5 mt-lg-0">
					<div>
						<div className="d-flex justify-content-between">
							<h3 className="mb-4">Upcoming Exams</h3>
							{type === 'instructor' && (
								<Link
									className="btn btn-primary px-3 height-fit"
									to="/instructor-portal/exams/create-exam"
								>
									CREATE NEW
								</Link>
							)}
						</div>
						<div className="d-flex flex-column gap-4">
							{upcomingExams?.length < 1
								? 'No Upcoming Exams till now'
								: upcomingExams?.map((exam) => (
										<ExamCardUpcoming key={exam._id} data={exam} type={type} />
								  ))}
						</div>
					</div>
				</div>
			</div>

			<div className="my-5">
				<h3 className="mb-4">Earned Certificates</h3>
				<div className="row g-3">
					{data?.earnedCertificates?.length < 1
						? 'You did ont earned any Certificate till now'
						: data?.earnedCertificates?.map((course) => (
								<div className="col-12" key={course?._id}>
									<CourseCardEarnedCertificates data={course} type={'student'} />
								</div>
						  ))}
				</div>
			</div>
		</div>
	);
}

export default StudentPortalData;
