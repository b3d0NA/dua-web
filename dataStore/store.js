import { configureStore } from "@reduxjs/toolkit";
import BookDetailsSlicer from "./feature/BookDetailsSlicer";
import BookmarkSlicer from "./feature/BookmarkSlicer";
import BookSlicer from "./feature/BookSlicer";
import DrawerSlicer from "./feature/DrawerSlicer";
import DuaCatSlicer from "./feature/DuaCatSlicer";
import DuaDailySlicer from "./feature/DuaDailySlicer";
import DuaInfoSlicer from "./feature/DuaInfoSlicer";
import DuaSlicer from "./feature/DuaSlicer";
import GlobalDataSlicer from "./feature/GlobalDataSlicer";
import MemorizationSlicer from "./feature/MemorizationSlicer";
import RuqyahSlicer from "./feature/RuqyahCatSlicer";
import RuqyahDetailsSlicer from "./feature/RuqyahDetailsSlicer";
import RuqyahSubCatSlicer from "./feature/RuqyahSubCatSlicer";
import SearchSlicer from "./feature/SearchSlicer";
import SubCatSlicer from "./feature/SubCatSlicer";

export const store = configureStore({
	reducer: {
		dua: DuaSlicer,
		duaCat: DuaCatSlicer,
		subCat: SubCatSlicer,
		ruqyahCat: RuqyahSlicer,
		ruqyahSubCat: RuqyahSubCatSlicer,
		ruqyahDetails: RuqyahDetailsSlicer,
		duaInfo: DuaInfoSlicer,
		books: BookSlicer,
		bookDetails: BookDetailsSlicer,
		drawer: DrawerSlicer,
		duaDaily: DuaDailySlicer,
		duaSearch: SearchSlicer,
		globalData: GlobalDataSlicer,
		memorization: MemorizationSlicer,
		bookmark: BookmarkSlicer,
	},
});
