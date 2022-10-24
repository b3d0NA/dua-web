import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
export const bookmarkSlicer = createSlice({
	name: "bookmark",
	initialState: {
		bookmarks: {},
	},
	reducers: {
		setBookmarks: (state, action) => {
			state.bookmarks = action.payload;
		},
		addBookmark: (state, { payload }) => {
			state.bookmarks[payload.name] = { bookmark: payload.name, color: payload.color, duas: [] };
			localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
		},
		addDua: (state, { payload }) => {
			const dua = _.cloneDeep(payload.dua);
			state.bookmarks[payload.bookmark].duas.push(dua);
			localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
		},
		updateBookmark: (state, { payload }) => {
			if (payload.oldName !== payload.name) {
				const clonedBookmark = _.cloneDeep(state.bookmarks[payload.oldName]);
				state.bookmarks[payload.name] = { bookmark: payload.name, color: payload.color, duas: clonedBookmark.duas };
				delete state.bookmarks[payload.oldName];
			} else {
				state.bookmarks[payload.name].color = payload.color;
			}

			localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
		},
		deleteDua: (state, { payload }) => {
			const duasExceptDeleted = state.bookmarks[payload.bookmark].duas.filter((dua) => {
				return parseInt(dua[0].dua_id) !== parseInt(payload.dua_id);
			});
			state.bookmarks[payload.bookmark].duas = duasExceptDeleted;
			localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
		},
	},
});

export const { setBookmarks, addBookmark, addDua, updateBookmark, deleteDua } = bookmarkSlicer.actions;

export default bookmarkSlicer.reducer;
