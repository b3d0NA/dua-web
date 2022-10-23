import React from "react";
import PopuUpAlpha from "./PouUpAlpha";

function PopUpContent({ duas, onClose }) {
	return (
		<div className="flex flex-wrap items-center justify-center m-auto space-x-2 space-y-2 w-96">
			{duas.map((dua) => {
				return <PopuUpAlpha onClose={onClose} key={dua.group} alpha={dua.group} />;
			})}
		</div>
	);
}

export default PopUpContent;
