import React from 'react';
import './LoginPage.css';
import LoginCard from '../../Components/Auth/LoginCard';
import LoginModal from '../../Components/Auth/LoginModal';

export default function LoginPage() {
	return (
		<div className="container login-container d-flex flex-column justify-content-center align-items-center mx-auto min-vh-100">
			<LoginCard />
			
			<LoginModal />
		</div>
	);
}
