import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/homePage';
import InstructorPortalPage from './Pages/InstructorPortal/instructorPortalPage';
import AdminPanelJobs from './Pages/Admin/AdminJobs/admin-panel-jobs';
import StudentPortalPage from './Pages/StudentPortal/StudentPortalPage';
import MainCreateCV from './Pages/CreateCV/MainCreateCV';
import MainInformation1Form from './Components/CreateCV/MainInformation1Form';
import Summary2Form from './Components/CreateCV/Summary2Form';
import Skills3Form from './Components/CreateCV/Skills3Form';
import HonersAndAwards6Form from './Components/CreateCV/HonersAndAwards6Form';
import Experience4Form from './Components/CreateCV/Experience4Form';
import Education5Form from './Components/CreateCV/Education5Form';
import Links8Form from './Components/CreateCV/Links8Form';
import HobbiesAndInterests7Form from './Components/CreateCV/HobbiesAndInterests7Form';
import LoginPage from './Pages/Auth/loginPage';
import ResetPasswordPage from './Pages/Auth/resetPasswordPage';
import TopHeader from './Components/Header/TopHeader';
import MustafaPart from './Components/MustafaPart';
import BackToHomeGlobal from './Components/backToHomeGlobal';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/auth/login" element={<LoginPage />} />
				<Route path="/auth/reset-password" element={<ResetPasswordPage />} />
			</Routes>

			<TopHeader />
			<BackToHomeGlobal />
			{/* <navbar /> */}
			<Routes>
				<Route path="/" element={<MustafaPart />} />
				<Route path="/instructor" element={<InstructorPortalPage />} />
				<Route path="/student" element={<StudentPortalPage />} />
				<Route path="/admin-panel/jobs" element={<AdminPanelJobs />} />

				{/* {create cv routes ----------------------------------------} */}
				<Route path="/jobs/create-cv/" element={<MainCreateCV />}>
					{/* redirect to first route -------------------------------- */}
					<Route index element={<Navigate replace to="/jobs/create-cv/main-information" />} />
					<Route path="main-information" element={<MainInformation1Form />} />
					<Route path="summary" element={<Summary2Form />} />
					<Route path="skills" element={<Skills3Form />} />
					<Route path="honers-and-awards" element={<HonersAndAwards6Form />} />
					<Route path="hobbies-and-interests" element={<HobbiesAndInterests7Form />} />
					<Route path="experience" element={<Experience4Form />} />
					<Route path="education" element={<Education5Form />} />
					<Route path="links" element={<Links8Form />} />
				</Route>

				{/* <Footer /> */}
			</Routes>
		</div>
	);
}

export default App;
