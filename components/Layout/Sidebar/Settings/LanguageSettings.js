import { useDispatch, useSelector } from "react-redux";
import { setSetting } from "../../../../dataStore/feature/GlobalDataSlicer";
const LanguageSettings = () => {
	const dispatch = useDispatch();
	const { language } = useSelector((state) => state.globalData.settings);

	return (
		<div className={`py-6  animate-scale-down`}>
			<div className="flex flex-row justify-center mx-4 gap-x-3 animate-scale-down">
				<button
					onClick={() => dispatch(setSetting({ name: "language", value: "en" }))}
					className={
						language === "en"
							? "bg-blue-400 btn drop-shadow-  w-29 h-10 text-ms "
							: "btn-outline text-title w-29 h-10 text-ms  dark:border-[#96a2b4]"
					}>
					English
				</button>
				<button
					onClick={() => dispatch(setSetting({ name: "language", value: "bn" }))}
					className={
						language === "bn"
							? "bg-blue-400 btn drop-shadow-  w-29 h-10 text-ms "
							: "btn-outline text-title w-29 h-10 text-ms  dark:border-[#96a2b4]"
					}>
					বাংলা
				</button>
			</div>
		</div>
	);
};

export default LanguageSettings;
