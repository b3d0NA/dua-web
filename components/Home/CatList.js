import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import localStorageFnc from "../../dataStore/functions/localStorageFnc";
import Card from "../Utils/Card";

const CatList = () => {
	const data = useSelector((state) => state.duaCat.data);
	const language = useSelector((state) => state.globalData.language);
	const [duaCategory, setDuaCategory] = useState([]);

	useEffect(() => {
		localStorageFnc(data, "duaCategory", setDuaCategory);
	}, [data]);

	return (
		<div className="xs:absolute xs:w-full xs:left-0 xs:top-[32rem] xs:pb-24 sm:absolute sm:w-full left-0 sm:top-[33rem] sm:px-4 sm:pb-28  md:pb-24 lg:pb-24">
			<div className="flex flex-row items-center justify-between xs:hidden sm:hidden">
				<p className="font-medium text-left xs:text-sm sm:text-sm">Categories Of Dua :</p>
			</div>
			{
				<div className="grid mt-2 gap-x-8 gap-y-4 xs:px-4 xs:mt-4 xs:grid-cols-1 xs:gap-y-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3">
					{duaCategory !== undefined &&
						duaCategory?.result
							?.slice(0, 9)
							.map((item, index) => (
								<Card
									key={index}
									link={`/dua/${item.cat_id}/1`}
									catId={item.cat_id}
									title={language === "en" ? item.cat_name_en : item.cat_name_bn}
									subTitle={item.no_of_subcat}
									totalDua={item.no_of_dua}
								/>
							))}
				</div>
			}
			<div
				className="mx-auto text-center mt-8 border-[2px] border- border-dotted w-fit px-12 py-2  cursor-pointer
      hidden
      xs:block sm:block
      ">
				<Link href="/all-categories">
					<button>More Categories {">>"}</button>
				</Link>
			</div>
		</div>
	);
};

export default CatList;
