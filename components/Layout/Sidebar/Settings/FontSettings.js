import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScriptDropdown, setSetting } from "../../../../dataStore/feature/GlobalDataSlicer";
import DropDown from "../../../Utils/DropDown";

const FontSettings = () => {
	const scriptDrop = useSelector((state) => state.globalData.arabicScriptDrop);
	const dispatch = useDispatch();

	const MAX = 40;
	// const [translationFont, setTranslationFont] = useState(16);

	const [fontDropdown, setFontDropdown] = useState(false);

	const { translationFont, arabicScript, arabicFont, arabicFontSize } = useSelector((state) => state.globalData.settings);

	const getBackgroundSize = (font) => {
		return {
			backgroundSize: `${(font * 100) / MAX}% 100%`,
		};
	};

	function selectArabicScript(e) {
		dispatch(
			setSetting({
				name: "arabicScript",
				value: e.target.innerText,
			})
		);
		dispatch(ScriptDropdown(!scriptDrop));
	}

	function selectArabicFont(e) {
		dispatch(
			setSetting({
				name: "arabicFont",
				value: e.target.innerText,
			})
		);
		setFontDropdown(!fontDropdown);
	}
	return (
		<div className="px-4 pb-1 animate-scale-down">
			<div className="flex flex-col items-start">
				<p className="mt-4 mb-3 text-sm text-title ">Translation Font Size</p>

				<div className="mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center">
					<input
						type="range"
						min="0"
						max={MAX}
						onChange={(e) =>
							dispatch(
								setSetting({
									name: "translationFont",
									value: e.target.value,
								})
							)
						}
						style={getBackgroundSize(translationFont)}
						value={translationFont}
					/>
					<div>{translationFont}</div>
				</div>
			</div>

			<div className="flex flex-col items-start">
				<div className="mt-4 w-[96%]">
					<p className="mb-3 text-sm text-title ">Select Arabic Script</p>
					<DropDown selected={arabicScript} dropDown={scriptDrop} setDropDown={() => dispatch(ScriptDropdown(!scriptDrop))}>
						<div className="cursor-pointer font-Inter text-[15px] flex flex-col px-2">
							<div className="hover:bg-[#F8F8F9] px-4 py-2 " onClick={selectArabicScript}>
								KGFQ
							</div>
							<div className="hover:bg-[#F8F8F9] px-4 py-2 " onClick={selectArabicScript}>
								Noor e Huda
							</div>
							<div className="hover:bg-[#F8F8F9] px-4 py-2 " onClick={selectArabicScript}>
								Noor E Hedayet
							</div>
						</div>
					</DropDown>
				</div>
				<div className="mt-4 w-[96%]">
					<p className="mb-3 text-sm text-title">Arabic Font</p>
					<DropDown selected={arabicFont} dropDown={fontDropdown} setDropDown={setFontDropdown}>
						<div className="cursor-pointer font-Inter text-[15px] flex flex-col px-2">
							<div className="hover:bg-[#F8F8F9] px-4 py-2 " onClick={selectArabicFont}>
								KGFQ
							</div>
							<div className="hover:bg-[#F8F8F9] px-4 py-2 " onClick={selectArabicFont}>
								Noor e Huda
							</div>
							<div className="hover:bg-[#F8F8F9] px-4 py-2 " onClick={selectArabicFont}>
								Noor E Hedayet
							</div>
						</div>
					</DropDown>
				</div>
			</div>

			<div className="flex flex-col items-start my-4">
				<p className="mb-3 text-sm text-title">Arabic Font Size</p>
				<div className="mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center">
					<input
						className=""
						type="range"
						min="0"
						max={MAX}
						onChange={(e) =>
							dispatch(
								setSetting({
									name: "arabicFontSize",
									value: e.target.value,
								})
							)
						}
						style={getBackgroundSize(arabicFontSize)}
						value={arabicFontSize}
					/>
					<div>{arabicFontSize}</div>
				</div>
			</div>
		</div>
	);
};

export default FontSettings;
