import axios from "axios";
import PUrls from "./urls";

import { setData, setLoading } from "../feature/SearchSlicer";
import { store } from "../store";

export default class SearchApi {
	static duaSearch = async (query, lang) => {
		store.dispatch(setLoading());
		const res = await axios.post(PUrls.duaSearch + lang, query).catch((error) => console.log("Error: ", error));

		try {
			store.dispatch(setData(res.data));
			store.dispatch(setLoading());
		} catch (_) {}
	};
}
