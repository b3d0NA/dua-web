import { useDispatch, useSelector } from "react-redux";
import { setSetting } from "../../../../dataStore/feature/GlobalDataSlicer";

const GeneralSettings = () => {
	const dispatch = useDispatch();

	const { showArabic } = useSelector((state) => state.globalData.settings);
	const { showTranslation } = useSelector((state) => state.globalData.settings);
	const { showTransliteration } = useSelector((state) => state.globalData.settings);
	const { showReference } = useSelector((state) => state.globalData.settings);

	// useEffect(() => {
	// 	localStorage.setItem("showArabic", isArabic);
	// 	localStorage.setItem("showTranslation", isTranslation);
	// 	localStorage.setItem("showTransliteration", isTransliteration);
	// 	localStorage.setItem("showRefference", isRefference);
	// }, [isArabic, isTranslation, isTransliteration, isRefference]);

	return (
		<div className="flex flex-col px-4 py-2 animate-scale-down">
			<CheckboxList
				onClick={() =>
					dispatch(
						setSetting({
							name: "showArabic",
							value: !showArabic,
						})
					)
				}
				state={showArabic}
				name="Show Arabic"
			/>

			<CheckboxList
				onClick={() =>
					dispatch(
						setSetting({
							name: "showTranslation",
							value: !showTranslation,
						})
					)
				}
				state={showTranslation}
				name="Show Translation"
			/>

			<CheckboxList
				onClick={() =>
					dispatch(
						setSetting({
							name: "showTransliteration",
							value: !showTransliteration,
						})
					)
				}
				state={showTransliteration}
				name="Show Transliteration"
			/>

			<CheckboxList
				onClick={() =>
					dispatch(
						setSetting({
							name: "showReference",
							value: !showReference,
						})
					)
				}
				state={showReference}
				name="Show Refference"
			/>
		</div>
	);
};

export default GeneralSettings;

function CheckboxList(props) {
	return (
		<div onClick={() => props.onClick()} className="flex flex-row justify-between py-1 text-sm cursor-pointer text-title gap-x-3">
			<p>{props.name}</p>
			<div
				className={`w-5 h-5 flex items-center justify-center  ${
					props.state
						? "bg-blue-400 transition duration-150 delay-75"
						: "border-solid border-[2px] border-black  transition duration-150 delay-75"
				}`}>
				{props.state && (
					<svg width="12" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 7L5 11L15 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				)}
			</div>
		</div>
	);
}
