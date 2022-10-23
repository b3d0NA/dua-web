import { useState } from "react";

const TopBar = ({ duaName, selectTick, isSelected }) => {
	const [tick, setTick] = useState(isSelected ? "greentick" : "tick");

	const handleTick = () => {
		if (tick === "tick") {
			setTick("greentick");
		} else {
			setTick("tick");
		}
		selectTick();
	};
	return (
		<div>
			<div className="flex flex-row justify-between">
				<div className="flex flex-row  justify-start items-center ">
					{/* DuaName */}
					<p className=" font-inter text-lg">{duaName}</p>
				</div>
				<button onClick={handleTick}>
					<img className="stroke-cyan-500" src={`/assets/memorize/${tick}.svg`} alt="" />
				</button>
			</div>
			<div className="w-full h-[1px] mt-5 bg-[#E2E2E2] dark:hidden"></div>
		</div>
	);
};

export default TopBar;
