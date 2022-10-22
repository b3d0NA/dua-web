import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScriptDropdown, setSettings } from "../../dataStore/feature/GlobalDataSlicer";
import isValidJson from "../../dataStore/functions/isValidJson";
import CatList from "./Sidebar/RightBarMenu";
import FontSettings from "./Sidebar/Settings/FontSettings";
import GeneralSettings from "./Sidebar/Settings/GeneralSettings";
import LanguageSettings from "./Sidebar/Settings/LanguageSettings";
function RightBar() {
	const scriptDropdown = useSelector((state) => state.globalData.scriptDropdown);
	const settings = useSelector((state) => state.globalData.settings);
	const dispatch = useDispatch();

	const globalDataHandler = () => {
		dispatch(ScriptDropdown(scriptDropdown === true ? false : ""));
	};

	useEffect(() => {
		if (!localStorage.getItem("settings")) {
			localStorage.setItem("settings", JSON.stringify(settings));
		}
	}, [settings]);

	useEffect(() => {
		if (localStorage.getItem("settings") && isValidJson(localStorage.getItem("settings"))) {
			const localSettings = localStorage.getItem("settings");
			dispatch(setSettings(JSON.parse(localSettings)));
		}
	}, [dispatch]);

	const [dropdown, setDropdown] = useState(1);

	function handleDropdown(id) {
		if (dropdown === id || (dropdown && id === undefined)) {
			setDropdown(null);
		}
		if (dropdown !== id) {
			setDropdown(id);
		}
	}

	return (
		<div
			className={`{w-full transition overflow-hidden
`}>
			<div
				className="b-red-100 dark:bg-[#223449] h-[84vh]  xs:h-fit xs:  
        sm:h-[90%] 
        sm:relative 
        sm:pb-3
        md:h-fit
        md:pb-4
        lg:h-fit
        lg:pb-4">
				<div
					className={`container text-center pt-9 pb-6 text-xl 
          xs:pt-6
          sm:pt-4
          
          `}>
					Settings
				</div>

				<div className="xs:pb-2">
					<CatList
						active={dropdown === 1 ? true : false}
						onClick={() => handleDropdown(1)}
						text="Language Settings"
						child={dropdown === 1 && <LanguageSettings />}
					/>
					<CatList
						active={dropdown === 2 ? true : false}
						onClick={() => handleDropdown(2)}
						text="General Settings"
						child={dropdown === 2 && <GeneralSettings />}
					/>
					<CatList
						active={dropdown === 3 ? true : false}
						onClick={() => handleDropdown(3)}
						text="Font Settings"
						child={dropdown === 3 && <FontSettings scriptDropdown={scriptDropdown} />}
					/>
				</div>
			</div>
		</div>
	);
}

export default RightBar;
