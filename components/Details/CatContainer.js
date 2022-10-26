import { useState } from "react";
import SearchIcon from "../../assets/searchIcon";
import SearchBox from "../Widget/SearchBox";
import CatList from "./CategoryList/CatList";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const CatContainer = ({ ns, title, hidden = "xs:hidden sm:hidden md:hidden lg:hidden" }) => {
	const [search, setSearch] = useState(false);
	const router = useRouter();
	const data = useSelector((state) => state.duaCat.data);
	const { language } = useSelector((state) => state.globalData.settings);

	const [cats, setCats] = useState([]);

	const handleSearch = (e) => {
		e.preventDefault();
		setSearch(!search);
	};

	useEffect(() => {
		data?.result && setCats(data.result);
	}, [data]);

	return (
		<div className={`h-[85.5vh] overflow-hidden bg-red-100 rounded-2lg  dark:bg-[#223449] ${hidden} xs:h-[100vh] sm:h-[50vh]`}>
			<div className="flex flex-row items-center justify-center px-5 rounded-t-2lg h-14">
				<button onClick={() => router.push("/")}>
					<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
						<path
							fillRule="evenodd"
							d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
				<p className="mx-auto text-sm text-black w-50">{title}</p>
				<button onClick={handleSearch}>
					<SearchIcon height="22" color="stroke-white" />
				</button>
			</div>
			{search && (
				<div className="mx-3 mt-5">
					<SearchBox setCats={setCats} hint={`${"Search " + title}`} />
					<p className="mt-4 text-sm text-start">Search Results:</p>
				</div>
			)}
			<div className="mt-6 scrl h-[calc(100vh_-_200px)] pb-8 xs:h-[calc(100vh_-_40vh)] sm:h-[calc(100vh_-_40vh)] scroll-smooth">
				{cats &&
					cats.map((item, index) => (
						<CatList
							key={index}
							isOpen={parseInt(item.cat_id) === parseInt(router.query.cat_id) ? true : false}
							catId={item.cat_id}
							catName={language === "en" ? item.cat_name_en : item.cat_name_bn}
							subCat={item.no_of_subcat}
							DuaC={item.no_of_dua}
						/>
					))}
			</div>
		</div>
	);
};

export default CatContainer;
