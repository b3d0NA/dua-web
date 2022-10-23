import { useSelector } from "react-redux";
import SubCatText from "../Ui/SubCatText";

const SubCatList = (props) => {
	const data = useSelector((state) => state.subCat.data);
	const { language } = useSelector((state) => state.globalData.settings);

	// console.log(data);
	return (
		<div className="my-2 ml-12 border-l-2 border-dotted border-">
			<div className="flex flex-col items-start justify-start ml-3 border-dotted gap-y-2 ">
				{data &&
					data?.result
						?.filter((filterItem) => {
							return filterItem.cat_id === props.catId;
						})
						.map((item, index) => (
							<SubCatText
								key={index}
								catId={item.cat_id}
								subCatId={item.subcat_id}
								text={language === "en" ? item.subcat_name_en : item.subcat_name_bn}
							/>
						))}
			</div>
		</div>
	);
};
export default SubCatList;
