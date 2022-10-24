import React from "react";

function FolderName({ name, setName, day, setDay }) {
	function validateName(e) {
		const value = e.target.value.replace(/[^\w\s]/gi, "");
		if (value.length <= 30) {
			setName(value);
		}
	}
	return (
		<>
			<label className="block">
				<div className="mb-5">
					<span className="block mb-3 text-base font-medium text-left font-inter text-title ">Plan Name</span>

					<input
						onChange={validateName}
						className="w-full h-12 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 
            focus:ring- dark:border-none dark:bg-[#223449] dark:placeholder:text-[#fff]  "
						type="text"
						value={name}
						name="folder"
						placeholder="Title Name"
					/>
				</div>
			</label>
			<label className="block">
				<div className="mb-5">
					<span className="block mb-3 text-base font-medium text-left font-inter text-title ">Estimated Days</span>

					<input
						onChange={(e) => setDay(e.target.value)}
						className="w-full h-12 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 
            focus:ring- dark:border-none dark:bg-[#223449] dark:placeholder:text-[#fff]  "
						type="number"
						max={30}
						min={1}
						name="folder"
						value={day}
						placeholder="Input approximate date here"
					/>
				</div>
			</label>
		</>
	);
}

export default FolderName;
