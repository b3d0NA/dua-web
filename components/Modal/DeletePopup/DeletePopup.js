import React from "react";
import DeletePopupBtn from "./DeletePopupBtn";

function DeletePopup({ onClose, message, deleteDua }) {
	return (
		<div className="px-8 py-6 bg-red-100 xs:w-8/12">
			<p className="text-base font-normal leading-6 text-start font-inter text-title">{message}</p>
			<DeletePopupBtn onClose={onClose} deleteDua={deleteDua} />
		</div>
	);
}

export default DeletePopup;
