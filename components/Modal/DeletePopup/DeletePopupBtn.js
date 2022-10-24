import React from "react";

function DeletePopupBtn({ deleteDua, onClose }) {
	function deleteDuaFromPlan() {
		deleteDua();
		onClose();
	}
	return (
		<div className="flex flex-wrap items-center justify-end flex-shrink-0 mt-7">
			<button
				onClick={() => onClose()}
				type="button"
				className="w-40 h-11 inline-block bg-[#EDEDED]   transition duration-150 ease-in-out font-inter font-medium text-base leading-5 text-[#6b6b6b] mr-6"
				data-bs-dismiss="modal">
				Cancel
			</button>
			<button
				onClick={deleteDuaFromPlan}
				type="button"
				className="w-40 h-11 inline-block bg-[#FF3F3F]  transition duration-150 ease-in-out ml-1 font-inter font-medium text-base leading-5 text-black ">
				Delete
			</button>
		</div>
	);
}

export default DeletePopupBtn;
