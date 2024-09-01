import React from 'react';
import HeaderTitle from '../../Components/Global/HeaderTitle';
import './instructorPortalStyle.css';
import { instructorPortalData } from './data';
import InstructorPortalInfo from '../../Components/InstructorPortal/InstructorPortalData';

function InstructorPortalPage() {
	return (
		<>
			<div className="container my-5">
				<HeaderTitle title={'Instructor Portal'} />
			</div>
			<section>
				<InstructorPortalInfo data={instructorPortalData} user="instructor" />
			</section>
		</>
	);
}

export default InstructorPortalPage;
