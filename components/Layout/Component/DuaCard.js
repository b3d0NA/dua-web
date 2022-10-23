import Link from "next/link";
import SubCatApi from "../../../../dataStore/api/SubCatApi";

const DuaCard = (props) => {
	const handleClick = (e) => {
		SubCatApi.getSubCategory(props.catId);
	};

	return (
		<Link href={`dua/${props.catId}/1`}>
			<a href="/#" onClick={handleClick}>
				<div className="bg-red-100 cursor-pointer flex justify-between items-center w-full h-22  hover:drop-shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:transition duration-200 delay-200 dark:bg-[#223449]">
					<div className="flex flex-row items-center">
						<div className=" flex items-center   h-15 w-15 mx-3.5 "></div>
						<div className="text-left">
							<p className="mb-1 text-sm font-medium text-title xs:font-medium lg:text-base ">{props.catName}</p>
							<p className="text-xs text-mute-grey ">Subcategory: {props.subCat}</p>
						</div>
					</div>
					<div className="flex flex-row items-center mr-5">
						<div className="bg-devider w-0.1 mr-3 h-12 dark:hidden"></div>
						<div className="flex flex-col items-center justify-center">
							<p className="font-medium xs:text-sm ">{props.DuaC}</p>
							<p className="text-xs text-mute-grey ">Duas</p>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default DuaCard;
