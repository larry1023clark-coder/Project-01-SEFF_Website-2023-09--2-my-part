import React from 'react';
import { adminSideBarData } from '../AdminJobs/adminJobData';
import { Link } from 'react-router-dom';

function SideBarAdmin() {
	return (
		<div className="bg-black bg-opacity-25 rounded text-capitalize p-3 d-none d-xl-block">
			{adminSideBarData &&
				adminSideBarData?.map((section, i) => (
					<div key={i}>
						{console.log(adminSideBarData)}
						<Link
							className="d-block bg-black bg-opacity-25 rounded fw-bold py-3 px-4"
							to={section?.link || '#'}
						>
							{section?.title}
						</Link>
						<ul className=" list-unstyled px-4 link-info line_height-2 mt-3 mb-5">
							{section?.content?.map((sub, i) => (
								<li key={i}>
									<h6
										className="text-light active-scale clickable"
										style={{ transformOrigin: 'left' }}
									>
										{sub}
									</h6>
								</li>
							))}
						</ul>
					</div>
				))}
		</div>
	);
}

export default SideBarAdmin;
