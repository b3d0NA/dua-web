import React from "react";

function PopupBtn({ onClose, save }) {
	return (
		<div className="flex flex-wrap items-center justify-end flex-shrink-0 mb-4 modal-footer mt-7">
			<button
				onClick={() => onClose()}
				type="button"
				className="w-40 h-11 inline-block bg-[#EDEDED]   transition duration-150 ease-in-out font-inter font-medium text-base leading-5 text-[#6b6b6b] mr-6"
				data-bs-dismiss="modal">
				Cancel
			</button>
			<button
				onClick={save}
				type="button"
				className="inline-block w-40 ml-1 text-base font-medium leading-5 text-black transition duration-150 ease-in-out h-11 font-inter ">
				Save
			</button>
		</div>
	);
}

export default PopupBtn;
