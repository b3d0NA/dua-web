import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/Bookmark/Inside/Card";
import Master from "../../../components/Layout/Master";
import { setBookmarks } from "../../../dataStore/feature/BookmarkSlicer";
import getDigitBanglaFromEnglish from "../../../dataStore/functions/englishToBangla";
import isValidJson from "../../../dataStore/functions/isValidJson";

const BookmarkList = () => {
	const { bookmarks } = useSelector((state) => state.bookmark);
	const { language } = useSelector((state) => state.globalData.settings);
	const { query } = useRouter();
	const dispatch = useDispatch();

	const [duas, setDuas] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("bookmarks") && isValidJson(localStorage.getItem("bookmarks"))) {
			const localBookmarks = localStorage.getItem("bookmarks");
			dispatch(setBookmarks(JSON.parse(localBookmarks)));
		}
	}, [dispatch]);

	useEffect(() => {
		if (bookmarks[query.bookmark]) {
			setDuas(bookmarks[query.bookmark].duas);
		}
	}, [query.bookmark, bookmarks]);
	return (
		<Master title={"Bookmark Page"}>
			<div
				className="grid gap-4 scrl h-[calc(100vh-100px)] pb-16
      sm:grid-cols-2
      md:grid-cols-2 md:pt-24
      lg:pt-24 lg:grid-cols-3
      xl:grid-cols-3
      2xl:grid-cols-3
      3xl:grid-cols-3">
				{duas.length !== 0 ? (
					duas.map((dua, index) => {
						return (
							<Card
								bookmark={query.bookmark}
								key={index}
								duaId={dua[0].dua_id}
								title={language === "en" ? dua[0].dua_name_en : dua[0].dua_name_bn}
								duaNumber={language === "en" ? parseInt(index) + 1 : getDigitBanglaFromEnglish("" + parseInt(index + 1))}
							/>
						);
					})
				) : (
					<p className="p-2 text-center">No dua available</p>
				)}
			</div>
		</Master>
	);
};

export default BookmarkList;
