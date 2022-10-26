import _ from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDua, addPlan } from "../../../dataStore/feature/MemorizationSlicer";
import SelectOption from "../PlanPopup/SelectOption";
import PopupBtn from "../PopupBtn";
import CreateNew from "./CreateNew";

function PopupCont({ onClose, dua }) {
	const subjectObj = useSelector((state) => state.memorization.plans);
	const subject = Object.values(subjectObj).map((item) => ({ name: item?.plan }));
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [day, setDay] = useState("");
	const [selected, setSelected] = useState(subject[0]);

	function savePlan() {
		if (_.isEmpty(subject)) {
			if (name && day) {
				dispatch(addPlan({ name, day }));
				dispatch(addDua({ plan: name, dua: dua }));
				onClose();
			}
		} else if (!_.isEmpty(subject)) {
			if (!name && !day && selected) {
				dispatch(addDua({ plan: selected.name, dua: dua }));
				onClose();
			} else if (name && day && selected) {
				dispatch(addPlan({ name, day }));
				dispatch(addDua({ plan: name, dua: dua }));
				onClose();
			}
		}
	}
	return (
		<div className="mx-8">
			<SelectOption selected={selected} setSelected={setSelected} subject={subject} />
			<CreateNew name={name} setName={setName} day={day} setDay={setDay} />
			<PopupBtn onClose={onClose} save={savePlan} />
		</div>
	);
}

export default PopupCont;
