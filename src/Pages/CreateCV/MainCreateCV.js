import React, { useEffect, useRef, useState } from 'react';
import './create-cv-style.css';
import { Outlet } from 'react-router-dom';

import HeaderTitle from '../../Components/Global/HeaderTitle';
import CreateCVStipper from '../../Components/CreateCV/CreateCVStipper';
import BackAndContinueBtns from '../../Components/CreateCV/BackAndContinueBtns';
import CustomizeYourCv from '../../Components/CreateCV/CustomizeYourCv';
import CVTemplate from '../../Components/CreateCV/CVTemplate';
import { formDataFiled, initialFormData } from '../../Components/CreateCV/data';
import { jsPDF } from 'jspdf';

function NewCreateCVPage() {
	const [formData, setFormData] = useState(
		sessionStorage.getItem('CVData')
			? JSON.parse(sessionStorage.getItem('CVData'))
			: formDataFiled
		// initialFormData
	);
	// Surakarta, December 2, 1994

	function handelChange(e, type) {
		const { value, name } = e.target;
		let data = formData?.[type];
		data = { ...data, [name]: value };
		setFormData((prev) => ({ ...prev, [type]: data }));
	}

	function handelChangeAbout(e) {
		const { value, name } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	function handelChangeMobile(value, s) {
		let data = formData?.main_information;
		data = { ...data, mobileNumber: value };
		setFormData({ ...formData, main_information: data });
	}

	//  handel Change in array form -----------------------------------------------
	function handelChangeSkills(e, i, type) {
		const { value } = e.target;
		const values = [...formData?.[type]];
		values[i] = value;
		setFormData((prev) => ({
			...prev,
			[type]: values,
		}));
	}

	function deleteSkill(i, type) {
		let newArray = formData.skills?.filter((_, index) => index !== i);
		formData?.[type].splice(i, 1);
		setFormData((prev) => ({ ...prev, [type]: [...formData?.[type]] }));
	}

	function addSkillInput(type) {
		setFormData((prev) => ({
			...prev,
			[type]: [...prev?.[type], ''],
		}));
	}

	// handel Change in Complex form -----------------------------------
	function handelChangeComplex(e, i, type) {
		const { value, name } = e.target;
		let data = [...formData?.[type]];
		data[i] = { ...data[i], [name]: value };
		setFormData((prev) => ({ ...prev, [type]: data }));
	}
	function deleteComplexItem(i, type) {
		let newArray = formData?.[type]?.filter((_, index) => index !== i);
		formData?.[type].splice(i, 1);
		setFormData((prev) => ({ ...prev, [type]: [...formData?.[type]] }));
	}

	function addComplexItem(type) {
		setFormData((prev) => ({
			...prev,
			[type]: [...formData?.[type], ''],
		}));
	}

	useEffect(() => {
		// copy formData object to session storage
		sessionStorage.setItem('CVData', JSON.stringify({ ...formData }));
	}, [formData]);

	// -------------------------- process and download cv logic ----------------------------
	const [loading, setLoading] = useState(false);
	const createPDF = () => {
		// setLoading(true);
		// const page = new jsPDF('portrait', 'px', [660, 1041.3]);

		const page = new jsPDF('p', 'pt', 'a4');
		page.setLanguage('ar-EG');
		const myFont = '/assets/fonts/Rubik/Rubik-VariableFont_wght.ttf'
		page.addFileToVFS("Rubik-VariableFont_wght.ttf", myFont);
		page.addFont("Rubik-VariableFont_wght.ttf", "MyFont", "normal");;

		const pageHeight = page.internal.pageSize.getHeight();
		const pageWidth = page.internal.pageSize.getWidth();
		// page.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
		// // const page = new jsPDF('p', 'px', [3508, 2480]); //'px', '[660, 1041.3]'
		// const page = new jsPDF('portrait', 'px', [3508, 2480]);

		// page.html(document.querySelector('#CV_Template')).then(() => {
		// 	page.save('my-CV.pdf');
		// });
		// setLoading(false);
		// page.addImage()
		page.html(document.querySelector('#CV_Template')).then(() => {
			const pdfBlob = page.output('blob');
			const url = URL.createObjectURL(pdfBlob);
			window.open(url, '_blank');
		});
	};

	const refTemplate = useRef();
	console.log('refTemplate.current', refTemplate.current);
	const [CVTemplate_width, setCVTemplate_width] = useState('auto');
	useEffect(() => {
		if (window.innerWidth && refTemplate.current) {
			const CVTemplate_Width = refTemplate.current?.offsetWidth;
			setCVTemplate_width(CVTemplate_Width-32);
			console.log('CVTemplate_width', CVTemplate_width);
			console.log('CVTemplate_width', refTemplate.current?.clientWidth);
		}
	}, [window.innerWidth]);

	return (
		<>
			<div>
				{/* <div className="overlay"></div> */}
				<section className="container">
					<HeaderTitle title={'Create CV'} />
					<CustomizeYourCv />
					<CreateCVStipper />
				</section>
				<section className="container">
					<div className="row create-cv p-3 bg-black bg-opacity-25 my-4 mx-0 p-0 p-lg-4 rounded ">
						<div className="col-12 col-lg-6 p-0 px-lg-3">
							{/* forms part ---------------------------------------------- */}
							<Outlet
								context={[
									formData,
									handelChange,
									handelChangeAbout,
									handelChangeMobile,
									handelChangeSkills,
									addSkillInput,
									deleteSkill,
									handelChangeComplex,
									deleteComplexItem,
									addComplexItem,
									setFormData,
								]}
							/>
						</div>
						<div className="col-12 col-lg-6 d-none d-lg-block" ref={refTemplate}>
							{/* template part ----------------------------------------- */}
							<CVTemplate data={formData} width={CVTemplate_width} />
						</div>
					</div>
					<BackAndContinueBtns loading={loading} createPDF={createPDF} />
				</section>
			</div>
		</>
	);
}

export default React.memo(NewCreateCVPage);
