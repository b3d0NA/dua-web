import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
export const bookmarkSlicer = createSlice({
	name: "bookmark",
	initialState: {
		plans: {},
	},
	reducers: {
		setPlans: (state, action) => {
			state.plans = action.payload;
		},
		addPlan: (state, { payload }) => {
			state.plans[payload.name] = { plan: payload.name, day: parseInt(payload.day), duas: [], created_at: new Date().toString() };
			localStorage.setItem("memorizations", JSON.stringify(state.plans));
		},
		addDua: (state, { payload }) => {
			const dua = _.cloneDeep(payload.dua);
			dua[0].isSelected = false;
			state.plans[payload.plan].duas.push(dua);
			localStorage.setItem("memorizations", JSON.stringify(state.plans));
		},
		updatePlan: (state, { payload }) => {
			const clonedPlan = _.cloneDeep(state.plans[payload.oldName]);
			state.plans[payload.name] = { plan: payload.name, day: parseInt(payload.day), duas: clonedPlan.duas, created_at: new Date().toString() };
			delete state.plans[payload.oldName];
			localStorage.setItem("memorizations", JSON.stringify(state.plans));
		},
		updateSelection: (state, { payload }) => {
			state.plans[payload.plan].duas.map((dua) => {
				if (parseInt(payload.dua_id) === parseInt(dua[0].dua_id)) {
					return (dua[0].isSelected = !dua[0].isSelected);
				}
				return "";
			});
			localStorage.setItem("memorizations", JSON.stringify(state.plans));
		},
		deleteDua: (state, { payload }) => {
			const duasExceptDeleted = state.plans[payload.plan].duas.filter((dua) => {
				return parseInt(dua[0].dua_id) !== parseInt(payload.dua_id);
			});
			state.plans[payload.plan].duas = duasExceptDeleted;
			localStorage.setItem("memorizations", JSON.stringify(state.plans));
		},
	},
});

export const { setPlans, addPlan, addDua, updateSelection, deleteDua, updatePlan } = bookmarkSlicer.actions;

export default bookmarkSlicer.reducer;
