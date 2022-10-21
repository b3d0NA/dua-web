import { useSelector } from "react-redux";
import SubCatText from "../Ui/SubCatText";

const SubCatList = (props) => {
	const data = useSelector((state) => state.subCat.data);

	return (
		<div className="my-2 ml-12 border-l-2 border-dotted border-">
			<div className="flex flex-col items-start justify-start ml-3 border-dotted gap-y-2 ">
				{data &&
					data?.result
						?.filter((filterItem) => {
							return filterItem.cat_id === props.catId;
						})
						.map((item) => <SubCatText catId={item.cat_id} subCatId={item.subcat_id} text={item.subcat_name_en} />)}
			</div>
		</div>
	);
};
export default SubCatList;
