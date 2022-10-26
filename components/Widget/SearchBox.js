import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../../assets/searchIcon";
const SearchBox = ({ hint, style, setCats }) => {
	const [search, setSearch] = useState("", 1000);
	const cats = useSelector((state) => state.duaCat.data);
	const { language } = useSelector((state) => state.globalData.settings);
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			const filtered = cats?.result?.filter((cat) => {
				if (language === "en") {
					return cat.cat_name_en.toLowerCase().includes(search.toLowerCase().trim());
				} else {
					return cat.cat_name_bn.toLowerCase().includes(search.toLowerCase().trim());
				}
			});
			setCats(filtered);
		}, 800);

		return () => clearTimeout(delayDebounceFn);
	}, [search, language]);

	return (
		<label className="relative block">
			<span className="absolute inset-y-0 left-0 flex items-center pl-4">
				<SearchIcon height="22" color="stroke-mute-grey" />
			</span>
			<input
				onChange={handleSearch}
				className={`${style} h-12 font-inter placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-red-100 min-w-full   pl-12 shadow-sm focus:outline-none focus:border- focus:ring- focus:ring-1  
sm:text-sm  dark:border-none dark:placeholder:text-[#96a2b4]`}
				placeholder={hint}
				type="text"
				name="search"
				value={search}
			/>
		</label>
	);
};

export default SearchBox;
