import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import SearchIcon from "../../../assets/searchIcon";
import InfoPopup from "./InfoPopup/InfoPopup";

const SearchBox = ({ hint }) => {
	const router = useRouter();
	const { language } = useSelector((state) => state.globalData.settings);
	const [modalShow, setModalShow] = useState(false);
	const [showDropdown, setShowDroshown] = useState(false);
	const { theme } = useTheme();
	const [searchText, setSearchText] = useState({ text: "" });
	const data = useSelector((state) => state.duaSearch.data);

	// useState
	const [, setEnter] = useState("");

	function submitSearch(e) {
		e.preventDefault();
		router.push(
			{
				pathname: "/search",
				query: { search: searchText.text },
			},
			"/search"
		);
	}

	return (
		<>
			<div className="relative flex flex-row items-center">
				<form onSubmit={submitSearch} action="">
					<div className="relative mr-8 w-82">
						<div className="relative flex justify-between">
							<span className="absolute inset-y-0 left-0 flex items-center pl-4">
								{theme === "dark" ? (
									<SearchIcon height="22" color="stroke-[#96a2b4]" />
								) : (
									<SearchIcon height="22" color="stroke-mute-grey" />
								)}
							</span>
							<input
								onChange={(e) => setSearchText({ text: e.target.value })}
								className="placeholder:text-mute-grey dark:placeholder:text-[#96a2b4] block placeholder:font-inter placeholder:text-sm bg-red-100 w-full  py-3 pl-12 pr-3 shadow-sm focus:outline-none focus:border- focus:ring- focus:ring-1 sm:text-sm dark:bg-[#223449] dark:placeholder:opacity-[.6]"
								placeholder={hint ?? language === "en" ? "Search by Dua Name English" : "বাংলায় দুয়ার নাম লিখে খুঁজুন"}
								type="text"
								name="search"
							/>
							{/* <div
                onClick={() => {
                  setShowDroshown(showDropdown === "false" ? "true" : "false");
                }}
                className="absolute mx-auto top-3 right-5">
                <OptionIcon height="22" color="stroke-mute-grey" />
              </div>
               <span
                className={`${
                  showDropdown === "true" ? "block animate-scale-down" : "hidden animate-scale-up"
                } absolute right-0 top-16 flex items-center pl-4`}>
                <Dropdown />
              </span>  */}
							<input
								className="absolute px-4 py-2 text-gray-400 bg-gray-100 cursor-pointer dark:hover:text-gray-400 dark:text-gray-500 hover:bg-gray-200 hover:text-gray-500 right-1 top-1"
								type="submit"
								value="Search"
							/>
						</div>
					</div>
				</form>
			</div>
			<Rodal
				showCloseButton={false}
				width={700}
				height={600}
				customStyles={{ backgroundColor: "transparent", boxShadow: "none", zIndex: "999999999999" }}
				visible={modalShow}
				onClose={() => setModalShow(false)}>
				<InfoPopup onClick={() => setModalShow(false)} />
			</Rodal>
		</>
	);
};

export default SearchBox;
