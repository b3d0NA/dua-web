import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import getDigitBanglaFromEnglish from "../../dataStore/functions/englishToBangla";

function Card({ link, title, subTitle, totalDua, onClick, midCard }) {
	const { language } = useSelector((state) => state.globalData.settings);
	return (
		<Link href={link}>
			<div onClick={onClick}>
				<div className="bg-red-100 cursor-pointer flex justify-between items-center w-full h-22  hover:drop-shadow-[0_4px_15px_rgba(0,0,0,0.05)]  dark:bg-[#223449]">
					<div className={`${midCard ? midCard : ""} flex flex-row items-center`}>
						<div className=" flex items-center   h-15 w-15 mx-3.5 "></div>
						<div className="text-left">
							<p className="mb-1 text-sm font-medium text-title xs:font-medium lg:text-base ">{title}</p>
							{subTitle && <p className="text-xs text-mute-grey ">Subcategory: {subTitle}</p>}
						</div>
					</div>
					{totalDua && (
						<div className="flex flex-row items-center mr-5">
							<div className="bg-devider w-0.1 mr-3 h-12 dark:hidden"></div>
							<div className="flex flex-col items-center justify-center">
								<p className="font-medium xs:text-sm ">{language === "en" ? totalDua : getDigitBanglaFromEnglish("" + totalDua)}</p>
								<p className="text-xs text-mute-grey ">{language === "en" ? "Duas" : "দুয়া"}</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</Link>
	);
}

export default Card;
