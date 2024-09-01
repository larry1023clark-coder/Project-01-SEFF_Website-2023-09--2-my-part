import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function DragDropImg({ setImgUrl }) {
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: 'image/*',
		multiple: false,
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	useEffect(() => {
		setImgUrl && setImgUrl(files[0]?.preview);
	}, [files, setImgUrl]);

	// const images = files.map((file) => (
	// 	<div key={file.name}>
	// 		<div>
	// 			<img src={file.preview} style={{ width: "200px" }} alt="preview" />
	// 		</div>
	// 	</div>
	// ));

	return (
		<div>
			<div
				{...getRootProps()}
				className="cv-upload-img-container p-4 d-flex flex-column gap-3 align-items-center text-center"
			>
				<img src='/assets/images/upload-img.png' alt="upload Img" draggable="false" />
				<input {...getInputProps()} />
				{isDragActive ? (
					<h5 className="fw-bold">Drop file now... </h5>
				) : (
					<h5 className="fw-bold">
						Drag & drop files or{' '}
						<span className="text-decoration-underline text_primary clickable">
							Browse
						</span>
					</h5>
				)}

				<p
					className="fs-12 fw-bold text-secondary d-inline-block"
					style={{ maxWidth: '300px' }}
				>
					Supported formats: JPEG, PNG, GIF. MP4. PDF, PSD, Al, Word, PPT
				</p>
				{/* <div>{images}</div> */}
			</div>
		</div>
	);
}

export default DragDropImg;
