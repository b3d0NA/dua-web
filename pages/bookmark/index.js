import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Bookmark/Card";
import Master from "../../components/Layout/Master";
import { setBookmarks } from "../../dataStore/feature/BookmarkSlicer";
import isValidJson from "../../dataStore/functions/isValidJson";
const MyApp = () => {
	const { bookmarks } = useSelector((state) => state.bookmark);
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem("bookmarks") && isValidJson(localStorage.getItem("bookmarks"))) {
			const localBookmarks = localStorage.getItem("bookmarks");
			dispatch(setBookmarks(JSON.parse(localBookmarks)));
		}
	}, [dispatch]);
	return (
		<Master title={"Bookmark Page"}>
			<div className="scrl h-[calc(100vh-100px)]">
				<h5 className="font-medium text-lg text-[#373737] flex justify-start mb-4  ">Bookmarks List:</h5>
				<div className="grid mb-6 gap-x-6 gap-y-4 xs:gap-y-3 xs:pb-8 sm:grid-cols-2 sm:gap-x-4 sm:pb-10 md:grid-cols-2 md:gap-x-4 md:pb-5 lg:grid-cols-3 lg:pb-5 xl:grid-cols-3 xl:pb-7 2xl:grid-cols-3 2xl:pb-8 3xl:grid-cols-3 3xl:pb-8">
					{!_.isEmpty(bookmarks) ? (
						Object.values(bookmarks).map((bookmark, index) => {
							return (
								<Card key={index} bookmark={bookmark} path={"/bookmark/list/" + bookmark.bookmark} totalDuas={bookmark.duas.length} />
							);
						})
					) : (
						<p className="text-center">No bookmarks were created</p>
					)}
				</div>
			</div>
		</Master>
	);
};

export default MyApp;
