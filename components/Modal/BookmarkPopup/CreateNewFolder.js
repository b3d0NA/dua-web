import React from "react";

function CreateNewFolder({ name, setName }) {
	function validateName(e) {
		const value = e.target.value.replace(/[^\w\s]/gi, "");
		if (value.length <= 30) {
			setName(value);
		}
	}
	return (
		<label className="block">
			<p className="mb-2 text-base font-medium leading-5 text-left font-inter">Or,</p>
			<div className="mb-5">
				<input
					onChange={validateName}
					value={name}
					className="w-full h-12 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring-  dark:border-none dark:focus:ring-1 dark:focus:ring- dark:placeholder:text-[#dedede]"
					type="text"
					name="folder"
					placeholder="Create New Bookmark Folder"
				/>
			</div>
		</label>
	);
}

export default CreateNewFolder;
