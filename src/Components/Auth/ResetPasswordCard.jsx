import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

function ForgetPasswordCard() {
	const navigate = useNavigate();
	const [passwords, setPasswords] = useState({});

	const [showPass, setShowPass] = useState(false);
	const [showPassCon, setShowPassCon] = useState(false);

	const [isValid, setIsValid] = useState({});

	const [submitTitle, setSubmitTitle] = useState('Send');
	const [disableLogin, setDisableLogin] = useState(false);
	const [messages, setMessages] = useState('');

	const handlePassInput = (event) => {
		const password = event.target.value;
		setPasswords({ ...passwords, password });
		checkPassValidate(password);
	};

	const handlePassConInput = (event) => {
		const passwordCon = event.target.value;
		setPasswords({ ...passwords, passwordCon });
		checkConfirmValidate(passwordCon);
	};

	const checkPassValidate = (word) => {
		if (word !== '' && word?.length >= 6) {
			setIsValid((prev) => {
				return {
					...prev,
					password: {
						invalid: 'is-valid',
						message: '',
					},
				};
			});
			return true;
		} else if (word === '' || word?.length < 6) {
			setIsValid((prev) => {
				return {
					...prev,
					password: {
						invalid: 'is-invalid',
						message: 'Password should be at least 6 characters long',
					},
				};
			});
			return false;
		} else {
			setIsValid((prev) => {
				return {
					...prev,
					password: {
						invalid: 'is-invalid',
						message: 'Password Cannot be empty',
					},
				};
			});
			return false;
		}
	};
	const checkConfirmValidate = (word) => {
		if (word === '') {
			setIsValid((prev) => {
				return {
					...prev,
					passwordCon: {
						invalid: 'is-invalid',
						message: 'Password confirmation cannot be empty',
					},
				};
			});
			return false;
		} else if (word !== '' && word?.length >= 6 && word === passwords?.password) {
			setIsValid((prev) => {
				return {
					...prev,
					passwordCon: {
						invalid: 'is-valid',
						message: '',
					},
				};
			});
			return true;
		} else {
			setIsValid((prev) => {
				return {
					...prev,
					passwordCon: {
						invalid: 'is-invalid',
						message: 'Passwords should match',
					},
				};
			});
			return false;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const checkPass = checkPassValidate(passwords?.password);
		const checkPassCon = checkConfirmValidate(passwords?.passwordCon);

		if (checkPass && checkPassCon) {
			setSubmitTitle('sending...');
			setDisableLogin(true);

			// try {
			// 	const response = await axios.post("http://...", passwords);
			// 	setMessages("Password created successfully, You will redirect to login page...");
			// 	navigate("/auth/login");
			// 	console.log( response.data);
			// } catch (error) {
			// 	console.error("Something went wrong!, Please try agin later", error);
			// 	setMessages("Something went wrong!, Please try agin later");
			// }

			await new Promise((resolve) =>
				setTimeout(() => {
					setSubmitTitle('send');
					setDisableLogin(false);
					setMessages(
						'Password created successfully, You will redirect to login page...'
					);
					navigate('/auth/login');
				}, 1000)
			);
		} else {
			checkPassValidate(passwords?.password);
			checkConfirmValidate(passwords?.passwordCon);
		}
	};

	return (
		<div className="Login__card  pt-5 mt-5">
			<div className="p-4 shadow-lg position-relative bg-black bg-opacity-25 rounded-3">
				<div className="login_logo text-center mb-5">
					<img
						src="/assets/images/seff_logo_black.jpg"
						alt="Sign In"
						className=" rounded-circle"
						width="120"
					/>
				</div>

				<form
					id="form_login"
					method="POST"
					onSubmit={handleSubmit}
					className=" d-flex flex-column gap-3 mb-4"
				>
					<h4 className=" text-center">Reset Password</h4>

					{messages ? (
						<p className="text-secondary mb-0">{messages}</p>
					) : (
						<p className="text-secondary mb-0">Create new password</p>
					)}

					{/* error messages ------------------------------------------ */}
					<div>
						{isValid.password?.invalid && (
							<p className=" mb-0 text-danger">{isValid?.password?.message}</p>
						)}

						{isValid.passwordCon?.invalid && (
							<p className=" mb-0 text-danger">{isValid?.passwordCon?.message}</p>
						)}
					</div>

					<div className="login-inputs rounded">
						<i className="login_left-icon fa fa-lock fa-lg text_primary" />

						<input
							id="reset_password"
							autoComplete=""
							className={`form-control px-5 ${isValid?.password?.invalid}`}
							placeholder="Password"
							name="password"
							type={showPass ? 'text' : 'password'}
							value={passwords?.password || ''}
							onChange={handlePassInput}
						/>
						<div
							className="login_right-icon text-white-50 clickable me-4"
							onClick={() => setShowPass((prev) => !prev)}
						>
							{showPass ? <FaRegEyeSlash size={22} /> : <FaRegEye size={22} />}
						</div>
					</div>

					<div className="login-inputs rounded">
						<i className="login_left-icon fa fa-lock fa-lg text_primary" />

						<input
							id="reset_password_con"
							autoComplete=""
							className={`form-control px-5 ${isValid?.passwordCon?.invalid}`}
							placeholder="Confirm Password"
							name="passwordCon"
							type={showPassCon ? 'text' : 'password'}
							value={passwords?.passwordCon || ''}
							onChange={handlePassConInput}
						/>
						<div
							className="login_right-icon text-white-50 clickable me-4"
							onClick={() => setShowPassCon((prev) => !prev)}
						>
							{showPassCon ? <FaRegEyeSlash size={22} /> : <FaRegEye size={22} />}
						</div>
					</div>

					<button
						className="btn btn-lg btn-primary text-uppercase fw-bold fs-6 py-10"
						type="submit"
						disabled={disableLogin}
					>
						{submitTitle}
					</button>

					<h6 className=" text-center fw-bold pe-3">
						<Link className=" hover_primary shadow" to="/auth/login">
							<i className="fa-solid fa-angle-left" /> Back to Login
						</Link>
					</h6>
				</form>
			</div>
		</div>
	);
}

export default React.memo(ForgetPasswordCard);
