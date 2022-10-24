import React from "react";

function FolderColor({ color, setColor }) {
	function handleColor(e) {
		document.querySelectorAll(".color-tick").forEach((e) => e.remove());
		e.target.innerHTML = '<img class="color-tick" src="/assets/popup/tickMark.svg" alt="" />';
		const color = e.target.classList.toString();
		setColor(color.match(/#([a-f0-9]{3}){1,2}\b/i)[0]);
	}
	return (
		<label className="block">
			<div className="mb-5">
				<span className="block font-inter font-medium text-base text-title mb-[10px] text-left ">Change Folder Color</span>
				<div>
					<div className="flex justify-between">
						<span onClick={handleColor} className="flex items-center justify-center bg-[#60a5fa] cursor-pointer w-9 h-9">
							<img className="color-tick" src="/assets/popup/tickMark.svg" alt="" />
						</span>
						<span onClick={handleColor} className="bg-[#FFC107] w-9 cursor-pointer h-9  flex justify-center items-center"></span>
						<span onClick={handleColor} className="bg-[#9C27B0] w-9 cursor-pointer h-9  flex justify-center items-center"></span>
						<span onClick={handleColor} className="bg-[#2196F3] w-9 cursor-pointer h-9  flex justify-center items-center"></span>
						<span onClick={handleColor} className="bg-[#E91E63] w-9 cursor-pointer h-9  flex justify-center items-center"></span>
						<span onClick={handleColor} className="bg-[#3F51B5] w-9 cursor-pointer h-9  flex justify-center items-center"></span>
						<span onClick={handleColor} className="bg-[#00BCD4] w-9 cursor-pointer h-9  flex justify-center items-center"></span>
						<span onClick={handleColor} className="bg-[#8BC34A] w-9 cursor-pointer h-9  flex justify-center items-center"></span>
					</div>
				</div>
			</div>
		</label>
	);
}

export default FolderColor;
