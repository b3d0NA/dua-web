import React from "react";
import PopUpTop from "../PopUpTop";
import BookmarkPopupContent from "./BookmarkPopupContent";

function BookmarkPopup({ onClose, dua }) {
	return (
		<div className="border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-red-100 bg-clip-paddingoutline-none text-current dark:bg-[#223449]">
			<PopUpTop title={"Choose Folder"} />
			<BookmarkPopupContent dua={dua} onClose={onClose} />
		</div>
	);
}

export default BookmarkPopup;
