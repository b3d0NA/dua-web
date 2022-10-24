import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatContainer from "../../../components/Details/CatContainer";
import DuaCard from "../../../components/Details/DuaCard/DuaCard";
import SectionCard from "../../../components/Details/DuaCard/SectionCard";
import DuaContainer from "../../../components/Details/DuaContainer";
import Master from "../../../components/Layout/Master";
import DuaCatApi from "../../../dataStore/api/DuaCatApi";
import SubCatApi from "../../../dataStore/api/SubCatApi";
import { setBookmarks } from "../../../dataStore/feature/BookmarkSlicer";
import { setPlans } from "../../../dataStore/feature/MemorizationSlicer";
import isValidJson from "../../../dataStore/functions/isValidJson";

const DuaDetails = () => {
	const selectedDua = useSelector((state) => state.subCat.allDuaOfCatID);
	const loading = useSelector((state) => state.subCat.loading);
	const { plans } = useSelector((state) => state.memorization);
	const { bookmarks } = useSelector((state) => state.bookmark);
	const dispatch = useDispatch();
	var flattenAllDuas = selectedDua?.flat();
	let sameIDDuasGrouped = [];

	const { cat_id, dua_id } = useRouter().query;

	var results = flattenAllDuas?.reduce(function (results, flattenAllDuas) {
		(results[flattenAllDuas.dua_id] = results[flattenAllDuas.dua_id] || []).push(flattenAllDuas);
		return results;
	}, {});
	if (results !== undefined) {
		Object.keys(results).forEach(function (key) {
			sameIDDuasGrouped.push(results[key]);
		});
	}
	useEffect(() => {
		DuaCatApi.getCategory();
	}, []);

	useEffect(() => {
		if (cat_id && dua_id) {
			SubCatApi.getSubCategory(parseInt(cat_id));
		}
	}, [cat_id, dua_id]);

	useEffect(() => {
		if (!localStorage.getItem("memorizations")) {
			localStorage.setItem("memorizations", JSON.stringify(plans));
		}
	}, [plans]);

	useEffect(() => {
		if (!localStorage.getItem("bookmarks")) {
			localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
		}
	}, [bookmarks]);

	useEffect(() => {
		if (localStorage.getItem("memorizations") && isValidJson(localStorage.getItem("memorizations"))) {
			const localMemorizations = localStorage.getItem("memorizations");
			dispatch(setPlans(JSON.parse(localMemorizations)));
		}
	}, [dispatch]);

	useEffect(() => {
		if (localStorage.getItem("bookmarks") && isValidJson(localStorage.getItem("bookmarks"))) {
			const localBookmarks = localStorage.getItem("bookmarks");
			dispatch(setBookmarks(JSON.parse(localBookmarks)));
		}
	}, [dispatch]);

	return (
		<Master ns={true}>
			<CatContainer title={"Categories"} />
			{loading ? (
				<svg className="w-5 h-5 m-auto text-gray-800 animate-spin" fill="none" viewBox="0 0 24 24">
					<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
			) : (
				<DuaContainer ns={true}>
					<SectionCard text="The servant is dependent on his Lord" />
					{sameIDDuasGrouped && sameIDDuasGrouped?.map((item, index) => <DuaCard key={index} dua={item} />)}
				</DuaContainer>
			)}
		</Master>
	);
};

export default DuaDetails;
