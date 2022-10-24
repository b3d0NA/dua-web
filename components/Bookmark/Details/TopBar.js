const SingleTopBar = ({ duaName }) => {
	return (
		<div>
			<div className="flex flex-row items-center justify-start">
				{/* DuaName */}
				<p className="text-lg font-medium font-inter">{duaName}</p>
			</div>
			<div className="w-full h-[1px] mt-5 bg-[#E2E2E2] dark:"></div>
		</div>
	);
};

export default SingleTopBar;
