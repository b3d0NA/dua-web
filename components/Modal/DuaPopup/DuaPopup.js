import React from "react";
import PopUpContent from "./PopUpContent";
import PopUpTop from "./PopUpTop";

function DuaPopup(props) {
	return (
		<div className="bg-red-100 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-paddingoutline-none text-current h-full dark:bg-[#223449]">
			<PopUpTop onClose={props.onClose} title={"Check in Alphabate"} />
			<PopUpContent onClose={props.onClose} duas={props.duas} />
		</div>
	);
}

export default DuaPopup;
