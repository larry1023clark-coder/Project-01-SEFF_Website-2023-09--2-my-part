import React from 'react';
import './admin-jobs-style.css';
// import './admin-jobs-global.css';
// import HeaderTitle from "../../../Components/Admin/AdminJobs/HeaderTitle";
import SideBarAdmin from '../../../Components/Admin/Global/SideBarAdmin';
import JobListContainer from '../../../Components/Admin/AdminJobs/JobListContainer';
import AdminSectionsSearchBar from '../../../Components/Admin/Global/AdminSectionsSearchBar';
import AdminListPagination from '../../../Components/Admin/Global/AdminListPagination';
import TopBarAdmin from '../../../Components/Admin/Global/TopBarAdmin';
import JobListContainerLg from '../../../Components/Admin/AdminJobs/JobListContainerLg';
import HeaderTitle from '../../../Components/Global/HeaderTitle';
import { Link } from 'react-router-dom';

function AdminPanelJobs() {
	return (
		<>
			<div className="container">
				<HeaderTitle title={'Admin Panel'} />
			</div>

			<div className="container d-flex flex-column gap-4 my-4 mt-3">
				{/* create new job button ---------------------- */}
				<div className="col align-self-lg-end px-3 mb-5 mb-lg-0 order-last order-lg-first">
					<Link
						className="btn btn-primary btn-block py-2 px-lg-5 w-100 fs-5"
						to="/admin-panel/jobs/crate-job"
					>
						create new job
					</Link>
				</div>

				{/* Sidebar and right table -------------------------*/}
				<div className="row gx-5">
					<div className="col-12 col-xl-3">
						<SideBarAdmin />
						<TopBarAdmin />
					</div>
					<div className="col-12 col-xl-9">
						<AdminSectionsSearchBar section="jobs" />
						<JobListContainerLg />
						<JobListContainer />
						<AdminListPagination />
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminPanelJobs;
