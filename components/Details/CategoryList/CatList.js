import { useEffect, useRef, useState } from "react";
import SubCatApi from "../../../dataStore/api/SubCatApi";
import SubCatList from "./SubcatList";

const CatList = (props) => {
	const [isOpen, setIsOpen] = useState(props.isOpen ?? false);

	const catRef = useRef();

	const handleClick = (e) => {
		e.preventDefault();
		e.target.scrollIntoView(true);
		if (!isOpen) {
			SubCatApi.getSubCategory(props.catId);
		}
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (props.isOpen) {
			catRef.current.scrollIntoView(true);
		}
	}, [props.catId, catRef, props.isOpen]);

	return (
		<div className="group" ref={catRef}>
			<a href="/#" onClick={handleClick}>
				<div className="flex items-center justify-between mx-3 bg-red-100 dark:bg-transparent">
					<div className="flex flex-row items-center justify-between w-full px-3 h-18 ">
						<div className="flex flex-row items-center">
							<div className="ml-4 text-left">
								<p className="text-base font-medium text-title font-inter ">{props.catName}</p>
								<p className="mt-1 text-xs text-mute-grey ">Subcategory: {props.subCat}</p>
							</div>
						</div>
					</div>
				</div>
			</a>
			{isOpen && <SubCatList catId={props.catId} />}
		</div>
	);
};

export default CatList;
