import { createSlice } from "@reduxjs/toolkit";

export const globalDataSlicer = createSlice({
	name: "globalData",
	initialState: {
		scriptDropdown: false,
		language: "en",
	},
	reducers: {
		ScriptDropdown: (state, action) => {
			state.arabicScriptDrop = action.payload;
		},
		setLanguage: (state, action) => {
			state.language = action.payload;
		},
	},
});

export const { ScriptDropdown, setLanguage } = globalDataSlicer.actions;

export default globalDataSlicer.reducer;
