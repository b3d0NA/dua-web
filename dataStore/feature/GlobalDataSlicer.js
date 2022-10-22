import { createSlice } from "@reduxjs/toolkit";

export const globalDataSlicer = createSlice({
	name: "globalData",
	initialState: {
		scriptDropdown: false,
		settings: {
			language: "en",
			showArabic: true,
			showTranslation: true,
			showTransliteration: true,
			showReference: true,
			translationFont: 16,
			arabicScript: "KGFQ",
			arabicFont: "KGFQ",
			arabicFontSize: 15,
		},
	},
	reducers: {
		ScriptDropdown: (state, action) => {
			state.arabicScriptDrop = action.payload;
		},
		setLanguage: (state, action) => {
			state.settings.language = action.payload;
		},
		setSetting: (state, { payload }) => {
			state.settings[payload.name] = payload.value;
			localStorage.setItem("settings", JSON.stringify(state.settings));
			// state.settings = action.payload;
		},
		setSettings: (state, { payload }) => {
			localStorage.setItem("settings", JSON.stringify(payload));
			state.settings = payload;
		},
	},
});

export const { ScriptDropdown, setSettings, setSetting } = globalDataSlicer.actions;

export default globalDataSlicer.reducer;
