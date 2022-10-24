import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import getDigitBanglaFromEnglish from "../../../dataStore/functions/englishToBangla";
import DuaBottomBar from "./DuaBottomBar";
import DuaTopbar from "./DuaTopbar";

const DuaCard = ({ dua }) => {
	const [animation, setAnimation] = useState(false);
	const { query } = useRouter();
	const duaCard = useRef();

	const { language, showArabic, showTranslation, showTransliteration, showReference, translationFont, arabicScript, arabicFont, arabicFontSize } =
		useSelector((state) => state.globalData.settings);

	useEffect(() => {
		return () => {
			setAnimation(true);
		};
	}, [dua[0].dua_id, showArabic, showTranslation, showTransliteration, showReference]);

	useEffect(() => {
		if (parseInt(query.dua_id) === parseInt(dua[0].dua_id)) {
			duaCard.current.scrollIntoView(true);
		}
	}, [query.dua_id, dua]);

	function copyDua() {
		navigator.clipboard.writeText(duaCard.current.innerText);
	}

	return (
		<div ref={duaCard} className="bg-red-100 rounded-2lg my-5 dark:bg-[#223449]">
			<div className="p-6">
				<DuaTopbar
					duaName={language === "en" ? dua[0].dua_name_en : dua[0].dua_name_bn}
					duaId={language === "en" ? dua[0].dua_id : getDigitBanglaFromEnglish(dua[0].dua_id.toString())}
				/>
				<div className={`flex flex-col justify-start items-start  ${animation && "animate-fade-in-up"}`}>
					{dua.map(function (item, index) {
						return (
							<div key={index} className="w-full">
								{/* Body */}
								{dua[index].top_en !== null && language === "en" && (
									<p className="my-5 font-normal text-justify text-title font-inter">{dua[index].top_en}</p>
								)}
								{dua[index].top_bn !== null && language === "bn" && (
									<p className="my-5 font-normal text-justify text-title font-inter">{dua[index].top_bn}</p>
								)}
								{/* Arabic */}

								{dua[index].dua_arabic !== null && showArabic && (
									<p
										style={{
											fontSize: arabicFontSize + "px",
											...(arabicFont === "Noor e Huda" && { fontFamily: "NoorHuda" }),
											...(arabicFont === "Noor E Hedayet" && { fontFamily: "Jomhuria" }),
										}}
										className="my-5 text-3xl leading-loose text-right text-title font-kgfq">
										{dua[index].dua_arabic}
									</p>
								)}
								{/* transliteration_en */}

								{dua[index].transliteration_en !== null && language === "en" && showTransliteration && (
									<p className="my-5 font-normal text-justify text-title font-inter">{dua[index].transliteration_en}</p>
								)}
								{dua[index].transliteration_bn !== null && language === "bn" && showTransliteration && (
									<p className="my-5 font-normal text-justify text-title font-kgfq">{dua[index].transliteration_bn}</p>
								)}

								{/* translation_en */}
								{dua[index].translation_en !== null && language === "en" && showTranslation && (
									<p style={{ fontSize: translationFont + "px" }} className="my-5 font-normal text-justify text-title font-inter">
										{dua[index].translation_en}
									</p>
								)}
								{dua[index].translation_bn !== null && language === "bn" && showTranslation && (
									<p style={{ fontSize: translationFont + "px" }} className="my-5 font-normal text-justify text-title font-inter">
										{dua[index].translation_bn}
									</p>
								)}
								{/* Dua Bottom Section */}
								{dua[index].bottom_en !== null && language === "en" && (
									<p className="my-5 font-normal text-justify text-title font-inter">{dua[index].bottom_en}</p>
								)}
								{dua[index].bottom_bn !== null && language === "bn" && (
									<p className="my-5 font-normal text-justify text-title font-inter">{dua[index].bottom_bn}</p>
								)}

								{dua.length > 1 && index !== dua.length - 1 && <div className="bg-devider h-[1px] dark:bg-[#2F4B5F]" />}
							</div>
						);
					})}

					{showReference && (
						<div>
							<p className="mt-2 ">{language === "en" ? "Reference:" : "রেফারেন্স:"}</p>
							{dua[dua.length - 1].refference_en !== null && language === "en" && (
								<div className="w-full mt-1 text-sm text-left text-title">{dua[dua.length - 1].refference_en}</div>
							)}
							{dua[dua.length - 1].refference_bn !== null && language === "bn" && (
								<div className="w-full mt-1 text-sm text-left text-title">{dua[dua.length - 1].refference_bn}</div>
							)}
						</div>
					)}
				</div>
			</div>
			<DuaBottomBar copyDua={copyDua} language={language} audio={dua[0].audio} dua={dua} />
		</div>
	);
};

export default DuaCard;
