import { useRef } from "react";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";
import getDigitBanglaFromEnglish from "../../dataStore/functions/englishToBangla";
import Botombar from "./Botombar";
import TopBar from "./TopBar";
const DetailsCard = ({ dua, searchText }) => {
	const duaElem = useRef();
	const { language } = useSelector((state) => state.globalData.settings);
	function copyDua() {
		navigator.clipboard.writeText(duaElem.current.innerText);
	}
	return (
		<div ref={duaElem} className="mb-5 bg-red-100 rounded-2lg ">
			<div className="p-6">
				<TopBar
					duaName={language === "en" ? dua.id + ". " + dua.dua_name_en : getDigitBanglaFromEnglish("" + dua.id) + ". " + dua.dua_name_bn}
				/>
				<div className="flex flex-col items-start justify-start">
					{/* Body */}
					<p className="my-5 font-normal text-justify text-title font-inter ">
						<Highlighter
							highlightClassName={"text-white bg-cyan-500"}
							searchWords={[searchText]}
							textToHighlight={language === "en" ? dua.top_en : dua.top_bn}
						/>
					</p>
					{/* Arabic */}
					{/* <p className="my-5 text-3xl leading-loose text-right text-title font-kgfq ">
            لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
            مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ اَللَّهُمَّ لَا مَانِعَ لِمَا
            أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
          </p> */}
					{(dua.transliteration_en || dua.transliteration_bn) && (
						<p className="my-5 font-normal text-justify text-title font-inter ">
							<Highlighter
								highlightClassName={"text-white bg-cyan-500"}
								searchWords={[searchText]}
								textToHighlight={language === "en" ? dua.transliteration_en : dua.transliteration_bn}
							/>
						</p>
					)}
					{(dua.translation_en || dua.translation_bn) && (
						<p className="my-5 font-normal text-justify text-title font-inter ">
							<Highlighter
								highlightClassName={"text-white bg-cyan-500"}
								searchWords={[searchText]}
								textToHighlight={language === "en" ? dua.translation_en : dua.translation_bn}
							/>
						</p>
					)}{" "}
					{(dua.bottom_en || dua.bottom_bn) && (
						<p className="my-5 font-normal text-justify text-title font-inter ">
							<Highlighter
								highlightClassName={"text-white bg-cyan-500"}
								searchWords={[searchText]}
								textToHighlight={language === "en" ? dua.bottom_en : dua.bottom_bn}
							/>
						</p>
					)}{" "}
					<p className="mt-2 text-base font-medium font-inter ">{language === "en" ? "Reference:" : "রেফারেন্স:"}</p>
					{(dua.refference_en || dua.refference_bn) && (
						<p className="mt-1 text-base font-normal font-inter text-title ">
							{language === "en" ? dua.refference_en : dua.refference_bn}
						</p>
					)}{" "}
				</div>
			</div>
			<Botombar path={`/dua/${dua.cat_id}/${dua.dua_id}`} copyDua={copyDua} />
		</div>
	);
};

export default DetailsCard;
