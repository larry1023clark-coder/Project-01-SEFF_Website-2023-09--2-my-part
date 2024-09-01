import React from 'react';
import InstructorInfoBarSquire from './InstructorInfoBarSquire';

function InstructorInfoBar({ upcomingExams, ongoingCourses, completedCourses }) {
	return (
		<div className="row text-capitalize p-5 bg-black bg-opacity-25 rounded g-3">
			<div className="col-12 col-lg-4">
				<InstructorInfoBarSquire title={'Upcoming Exams'} data={upcomingExams?.length}  />
				
			</div>
			<div className="col-12 col-lg-4">
				<InstructorInfoBarSquire title={'Ongoing Courses'} data={ongoingCourses?.length} />

				
			</div>
			<div className="col-12 col-lg-4">
				<InstructorInfoBarSquire title={'Completed Courses'} data={completedCourses?.length} />
			</div>
		</div>
	);
}

export default InstructorInfoBar;
