import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Master from "../components/Layout/Master";
import SearchList from "../components/Search/SearchList";
import SearchApi from "../dataStore/api/SearchApi";
const MyApp = () => {
	const { language } = useSelector((state) => state.globalData.settings);
	const loading = useSelector((state) => state.duaSearch.loading);
	const { query } = useRouter();

	const deaContainerRef = useRef();

	useEffect(() => {
		SearchApi.duaSearch({ text: query.search }, language === "en" ? "en" : "bn");
	}, [query.search, language]);

	function scrollToTop() {
		deaContainerRef?.current.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<Master>
			<div ref={deaContainerRef} className="scrl h-[calc(100vh_-_10px)]">
				{!loading ? (
					<SearchList scrollToTop={scrollToTop} searchText={query.search} />
				) : (
					<svg className="w-5 h-5 m-auto text-gray-800 animate-spin" fill="none" viewBox="0 0 24 24">
						<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
				)}
			</div>
		</Master>
	);
};

export default MyApp;
