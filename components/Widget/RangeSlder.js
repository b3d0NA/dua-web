const RangeSlider = ({ style, child, preChild, mt = "mt-2", trackProgress, max, ifChange, onScrubEnd }) => {
	return (
		<div className={`${mt} flex flex-row items-center w-[85%]`}>
			{preChild && <div className="ml-2 text-sm text-mute-grey-200">{preChild}</div>}
			<input
				min={0}
				max={max}
				value={trackProgress}
				onMouseUp={onScrubEnd}
				onKeyUp={onScrubEnd}
				type="range"
				name="range"
				onChange={(e) => ifChange(e.target.value)}
				className={`${style ?? "min-w-full h-2 bg-devider accent- dark:bg-[#fff7]"}  appearance-none`}
			/>
			<div className="ml-2 text-sm text-mute-grey-200 ">{child}</div>
		</div>
	);
};

export default RangeSlider;
