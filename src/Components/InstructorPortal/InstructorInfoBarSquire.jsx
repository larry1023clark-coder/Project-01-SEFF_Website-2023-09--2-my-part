import React from 'react';

function InstructorInfoBarSquire({ title, data }) {
	return (
		<div className="d-flex gap-2 align-items-center">
			<div className="instructor-info-squire rounded fs-1 shadow ">{data}</div>
			<h4>{title}</h4>
		</div>
	);
}

export default InstructorInfoBarSquire;
