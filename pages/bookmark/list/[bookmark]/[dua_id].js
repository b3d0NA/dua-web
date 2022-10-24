import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../../components/Bookmark/Details/Card";
import Master from "../../../../components/Layout/Master";
import { setBookmarks } from "../../../../dataStore/feature/BookmarkSlicer";
import isValidJson from "../../../../dataStore/functions/isValidJson";
const MyApp = () => {
	const { bookmarks } = useSelector((state) => state.bookmark);
	const { query } = useRouter();
	const dispatch = useDispatch();

	const [dua, setDua] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("bookmarks") && isValidJson(localStorage.getItem("bookmarks"))) {
			const localBookmarks = localStorage.getItem("bookmarks");
			dispatch(setBookmarks(JSON.parse(localBookmarks)));
		}
	}, [dispatch]);

	useEffect(() => {
		if (bookmarks[query.bookmark]) {
			setDua(bookmarks[query.bookmark].duas.filter((dua) => parseInt(dua[0].dua_id) === parseInt(query.dua_id))[0]);
		}
	}, [query.bookmark, bookmarks, query.dua_id]);
	return (
		<Master title={"Bookmark Page"}>
			<div
				className="scrl h-[calc(100vh_-_100px)] 
      xs:pb-10
      sm:pb-10
      md:pt-24 md:pb-5
      lg:pt-24 lg:pb-5
      xl:pb-16
      2xl:pb-16
      3xl:pb-16">
				{dua ? <Card dua={dua} bookmark={query.bookmark} /> : <p className="text-center">No dua available</p>}
			</div>
		</Master>
	);
};

export default MyApp;
