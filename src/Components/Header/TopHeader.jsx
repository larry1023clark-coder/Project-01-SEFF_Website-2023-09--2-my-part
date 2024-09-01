import React from 'react';
import { Link } from 'react-router-dom';

function TopHeader() {
	const isLogged = true;
	const userRole = 'instructor';

	const handelLogout = () => {
		console.log('handelLogout');
	};

	return (
		<div className="bg-dark bg-opacity-50">
			<div className="container d-flex justify-content-end gap-4 text-uppercase py-2 fs-p">
				{!isLogged ? (
					<Link to={'/auth/login'}>Login</Link>
				) : (
					<>
						{userRole === 'admin' && <Link to="/admin-panel">Admin Panel</Link>}
						{userRole === 'instructor' && (
							<Link to="/instructor">Instructor Portal</Link>
						)}
						{userRole === 'student' && <Link to="/student">Student Portal</Link>}
						<Link to={'/profile'}>Profile</Link>
						<Link onClick={handelLogout}>Logout</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default TopHeader;
