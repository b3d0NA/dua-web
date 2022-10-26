import _ from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, addDua } from "../../../dataStore/feature/BookmarkSlicer";
import PopupBtn from "../PopupBtn";
import CreateNewFolder from "./CreateNewFolder";
import FolderColor from "./FolderColor";
import SelectOption from "./SelectOption";
function BookmarkPopupContent({ onClose, dua }) {
	const subjectObj = useSelector((state) => state.bookmark.bookmarks);
	const subject = Object.values(subjectObj).map((item) => ({ name: item?.bookmark }));
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [color, setColor] = useState("#60a5fa");
	const [selected, setSelected] = useState(subject[0]);

	function saveBookmark() {
		if (_.isEmpty(subject)) {
			if (name && color) {
				dispatch(addBookmark({ name, color }));
				dispatch(addDua({ bookmark: name, dua: dua }));
				onClose();
			}
		} else if (!_.isEmpty(subject)) {
			if (!name && selected) {
				dispatch(addDua({ bookmark: selected.name, dua: dua }));
				onClose();
			} else if (name && selected) {
				dispatch(addBookmark({ name, color }));
				dispatch(addDua({ bookmark: name, dua: dua }));
				onClose();
			}
		}
	}
	return (
		<div className="relative modal-body ">
			<div className="flex items-start justify-center mt-4 mb-4">
				<div style={{ width: "87%" }}>
					<SelectOption selected={selected} setSelected={setSelected} subject={subject} title={"Folder Name"} />
					<CreateNewFolder name={name} setName={setName} />
					<FolderColor color={color} setColor={setColor} />
					<PopupBtn save={saveBookmark} onClose={onClose} />
				</div>
			</div>
		</div>
	);
}

export default BookmarkPopupContent;
