import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

function CourseCardUpcoming({ data }) {
	return (
		<div className="card rounded bg-black bg-opacity-25 text-light overflow-hidden">
			<div className="row g-0">
				<div className="col-12 col-lg-4 p-3 p-lg-0 position-relative ">
					<img
						src={data?.image || "/assets/images/Placeholder_img.png"}
						alt={data?.name}
						className="img-fluid"
						width="100%"
						height="100%"
					/>
					<div className="instructor-gradient-absolute d-none d-lg-flex ">
						<h5>LEV.{data?.level}</h5>
					</div>
				</div>

				<div className="col-12 col-lg-8 d-flex align-items-center p-3">
					<div className=" w-100">
						<h5>{data?.name}</h5>
						<div className=" d-flex flex-column flex-lg-row justify-content-between align-items-lg-center mt-3 flex-wrap">
							<div>
								<h6 className="">
									<i className="fa-regular fa-calendar me-2 text_primary"></i>
									{data?.date && format(new Date(data?.date), "EEEE, LLLL do")}
								</h6>
								<h6 className="">
									<i className="fa-regular fa-rectangle-list me-2 text_primary"></i>
									{data?.lessons} {data?.lessons > 1 ? " lessons" : " lesson"}
								</h6>
							</div>

							<div className="d-flex justify-content-between">
								<h5 className=" d-block d-lg-none">LEV.{data?.level}</h5>
								<Link
									className="btn btn-primary px-3 height-fit"
									to={`/instructor-portal/courses/${data?._id}`}
								>
									View Details
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseCardUpcoming;
