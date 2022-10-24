import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import DuaCard from "./DuaCard";

const SearchList = ({ searchText, scrollToTop }) => {
	const itemsPerPage = 20;
	const searchedDuas = useSelector((state) => state.duaSearch.data);

	const [duas, setDuas] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		// Fetch items from another resources.
		const endOffset = itemOffset + itemsPerPage;
		setDuas(searchedDuas?.result.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(searchedDuas?.result.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, searchedDuas?.result]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % searchedDuas?.result.length;
		setItemOffset(newOffset);
		scrollToTop();
	};

	return (
		<div className="flex flex-col h-full xs:pb-40">
			{duas?.length > 1 ? (
				duas?.map((item, index) => <DuaCard searchText={searchText} key={index} dua={item} />)
			) : (
				<p className="text-center">No dua found by your search</p>
			)}

			<ReactPaginate
				className="mx-auto"
				breakLabel="..."
				nextLabel="Next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< Previous"
				pageClassName="page-item mb-[150px] inline-block"
				pageLinkClassName="page-link hover:bg-blue-400 hover:text-white border border-gray-300 px-5  py-3"
				previousClassName="page-item inline-block mb-[150px]"
				previousLinkClassName="page-link hover:bg-blue-400 hover:text-white border border-gray-300 px-5 py-3"
				nextClassName="page-item inline-block mb-[150px]"
				nextLinkClassName="page-link hover:bg-blue-400 hover:text-white border border-gray-300 px-5  py-3"
				breakClassName="page-item inline-block mb-[150px] border border-gray-300 px-5  py-3"
				breakLinkClassName="page-link cursor-default"
				activeLinkClassName="bg-blue-400 text-white"
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default SearchList;
