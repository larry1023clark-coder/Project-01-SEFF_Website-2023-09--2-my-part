import React, { useEffect, useState } from 'react';
import { adminSideBarData } from '../AdminJobs/adminJobData';
import { Link, useLocation } from 'react-router-dom';

function TopBarAdmin() {
	const location = useLocation();
	const [activeAdminLinkIndex, setActiveAdminLinkIndex] = useState(0);
	const [activeAdminSubLinkIndex, setActiveAdminSubLinkIndex] = useState('');

	useEffect(() => {
		const linkIndex = adminSideBarData?.findIndex((e) =>
			location.pathname.includes(e.link)
		);
		const subLinkIndex = adminSideBarData[linkIndex || 0]?.content?.findIndex((e) =>
			location.pathname.includes(e?.toLowerCase())
		);
		setActiveAdminLinkIndex(linkIndex);
		setActiveAdminSubLinkIndex(subLinkIndex);
	}, [location.pathname]);

	return (
		<div className="topbar-sm text-capitalize d-block d-xl-none mt-5">
			<div className=" overflow-x-auto">
				<ul className="list-unstyled d-flex justify-content-center justify-content-sm-center align-items-center gap-3">
					{adminSideBarData &&
						adminSideBarData?.map((section, i) => (
							<li key={i} onClick={() => setActiveAdminLinkIndex(i)}>
								<Link
									to={section?.link || '#'}
									className={`admin-topbar-link ${
										activeAdminLinkIndex === i ? 'topbar-active' : ''
									} `}
								>
									<h5 className=" fw-bold p-3">{section?.title}</h5>
								</Link>
							</li>
						))}
				</ul>
			</div>
			<div className="admin-jobs dropdown">
				<div
					className="dropdown-toggle bg_gray2-opc rounded shadow text-white d-flex justify-content-between align-items-center px-4 py-2 w-100"
					role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					{adminSideBarData[activeAdminLinkIndex]?.content[activeAdminSubLinkIndex]}
				</div>
				<ul className="dropdown-menu w-100">
					{adminSideBarData[activeAdminLinkIndex]?.content?.map((sub, i) => (
						<li key={i} onClick={() => setActiveAdminSubLinkIndex(i)}>
							<Link className="dropdown-item">{sub}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default TopBarAdmin;
