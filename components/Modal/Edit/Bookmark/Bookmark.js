import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBookmark } from "../../../../dataStore/feature/BookmarkSlicer";
import PopupBtn from "../../PopupBtn";
import EditPopup from "../EditPopup";
import FolderColor from "./FolderColor";
import FolderName from "./FolderName";

function Bookmark({ onClose, name: oldName, color: oldColor, bookmark }) {
	const [name, setName] = useState(oldName);
	const [color, setColor] = useState(oldColor);

	const dispatch = useDispatch();

	function save() {
		dispatch(updateBookmark({ oldName, name, color }));
		onClose();
	}
	return (
		<EditPopup>
			<FolderName name={name} setName={setName} />
			<FolderColor color={color} setColor={setColor} />
			<PopupBtn save={save} onClose={onClose} />
		</EditPopup>
	);
}

export default Bookmark;
