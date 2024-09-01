import React from 'react';
import { todayDate } from '../../Config/DateToday';

function HeaderTitle({ title }) {
	return (
		<div className="text-light">
			<h6 className="head-page-title text-capitalize">{title}</h6>
			<h6>{todayDate}</h6>
		</div>
	);
}

export default HeaderTitle;
