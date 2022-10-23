import { createSlice } from "@reduxjs/toolkit";

export const memorizationSlicer = createSlice({
	name: "memorization",
	initialState: {
		plans: [],
	},
	reducers: {
		setPlans: (state, action) => {
			state.plans = action.payload;
		},
		addPlan: (state, { payload }) => {
			state.settings[payload.name] = payload.value;
			localStorage.setItem("settings", JSON.stringify(state.settings));
			// state.settings = action.payload;
		},
	},
});

export const { setPlans } = memorizationSlicer.actions;

export default memorizationSlicer.reducer;
