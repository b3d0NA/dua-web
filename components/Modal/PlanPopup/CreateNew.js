import React from "react";

function CreateNew({ name, day, setName, setDay }) {
	function validateName(e) {
		const value = e.target.value.replace(/[^\w\s]/gi, "");
		if (value.length <= 30) {
			setName(value);
		}
	}
	return (
		<label className="block">
			<div className="mb-5">
				<span className="block font-inter font-medium text-base text-title mb-[10px] text-left ">Or, Create New Plan</span>

				<input
					onChange={validateName}
					className="w-full h-[48px] px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- text-sm
           dark:border-none dark:placeholder:text-[#96b2a4]"
					type="text"
					name="plan"
					value={name}
					placeholder="Name of new plan"
					required
				/>
				<input
					onChange={(e) => setDay(e.target.value)}
					className="w-full h-[48px] mt-3 px-4 py-4 border border-solid   placeholder:font-inter placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.35] focus:outline-none focus:ring-1 focus:ring- text-sm
           dark:border-none dark:placeholder:text-[#96b2a4]"
					type="number"
					name="day"
					min={1}
					max={30}
					value={day}
					placeholder="Number of Day"
					required
				/>
			</div>
		</label>
	);
}

export default CreateNew;
