import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePlan } from "../../../dataStore/feature/MemorizationSlicer";
import PopupBtn from "../PopupBtn";
import EditPopup from "./EditPopup";
import FolderName from "./FolderName";

function Memorize({ onClose, name: oldName, day: oldDay }) {
	const [name, setName] = useState(oldName);
	const [day, setDay] = useState(oldDay);

	const dispatch = useDispatch();

	function save() {
		dispatch(updatePlan({ oldName, name, day }));
		onClose();
	}

	return (
		<EditPopup>
			<FolderName name={name} day={day} setName={setName} setDay={setDay} />
			<PopupBtn save={save} onClose={onClose} />
		</EditPopup>
	);
}

export default Memorize;
