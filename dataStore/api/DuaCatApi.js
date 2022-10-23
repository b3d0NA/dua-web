import axios from "axios";
import PUrls from "./urls";

import { setData, setLoading } from "../feature/DuaCatSlicer";
import { store } from "../store";
export default class DuaCatApi {
	static getCategory = async () => {
		// const data = await axios.get(PUrls.duaCategory);
		try {
			store.dispatch(setLoading());
			const res = await axios.get(PUrls.duaCategory);
			store.dispatch(setData(res.data));
		} catch (_) {}
	};
}
