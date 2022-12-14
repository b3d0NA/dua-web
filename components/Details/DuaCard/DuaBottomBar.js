import { useTheme } from "next-themes";
import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import BookmarkPopup from "../../Modal/BookmarkPopup/BookmarkPopup";
import PlanPopup from "../../Modal/PlanPopup/PlanPopup";
import ReportPopup from "../../Modal/ReportUsPop/ReportPopup";
import SharePopup from "../../Modal/SharePopup/SharePopup";

const DuaBottomBar = (props) => {
	const [bookmarkShow, setBookmark] = useState(false);
	const [planShow, setPlanShow] = useState(false);
	const [shareShow, setShareShow] = useState(false);
	const [reportShow, setReportShow] = useState(false);
	const { theme } = useTheme();
	return (
		<div className="">
			<div className="w-full h-[1px] mt-5 bg-[#E2E2E2] dark: dark:hidden"></div>
			<div className="flex flex-row justify-between px-6">
				{props.audio !== null ? (
					<>
						<div className="py-4 ">{props.language === "en" ? "Play: " : "শুনুনঃ "}</div>
						<audio controls>
							<source src={props.audio} type="audio/mpeg" />
						</audio>
					</>
				) : (
					<div></div>
				)}

				<div className="flex flex-row py-6 gap-x-8 xs:gap-x-4">
					<button onClick={props.copyDua} type="button" title="Copy">
						{theme === "dark" ? <img src="/assets/others/dark/copy.svg" alt="" /> : <img src="/assets/others/copy.svg" alt="" />}
					</button>
					<button
						type="button"
						onClick={() => setBookmark(true)}
						className="text-lg font-medium leading-tight text-black uppercase transition duration-150 ease-in-out">
						{theme === "dark" ? <img src="/assets/others/dark/bookmark.svg" alt="" /> : <img src="/assets/others/bookmark.svg" alt="" />}
					</button>

					<button
						type="button"
						onClick={() => setPlanShow(true)}
						className="text-lg font-medium leading-tight text-black uppercase transition duration-150 ease-in-out"
						data-bs-toggle="modal"
						data-bs-target="#plan">
						{theme === "dark" ? <img src="/assets/others/dark/plan.svg" alt="" /> : <img src="/assets/others/plan.svg" alt="" />}
					</button>
					<button
						type="button"
						onClick={() => setShareShow(true)}
						className="text-lg font-medium leading-tight text-black uppercase transition duration-150 ease-in-out"
						data-bs-toggle="modal"
						data-bs-target="#share">
						{theme === "dark" ? <img src="/assets/others/dark/share.svg" alt="" /> : <img src="/assets/others/share.svg" alt="" />}
					</button>
					<button
						type="button"
						onClick={() => setReportShow(true)}
						className="text-lg font-medium leading-tight text-black uppercase transition duration-150 ease-in-out"
						data-bs-toggle="modal"
						data-bs-target="#reportus">
						{theme === "dark" ? <img src="/assets/others/dark/report.svg" alt="" /> : <img src="/assets/others/report.svg" alt="" />}
					</button>
				</div>
			</div>
			<Rodal
				showCloseButton={false}
				width={500}
				height={500}
				customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
				visible={bookmarkShow}
				onClose={() => setBookmark(false)}>
				<BookmarkPopup dua={props.dua} onClose={() => setBookmark(false)} />
			</Rodal>
			<Rodal
				showCloseButton={false}
				width={500}
				height={500}
				customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
				visible={planShow}
				onClose={() => setPlanShow(false)}>
				<PlanPopup dua={props.dua} onClose={() => setPlanShow(false)} />
			</Rodal>
			<Rodal
				showCloseButton={false}
				width={500}
				height={500}
				customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
				visible={shareShow}
				onClose={() => setShareShow(false)}>
				<SharePopup onClose={() => setShareShow(false)} />
			</Rodal>
			<Rodal
				showCloseButton={false}
				width={500}
				height={600}
				customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
				visible={reportShow}
				onClose={() => setReportShow(false)}>
				<ReportPopup onClose={() => setReportShow(false)} />
			</Rodal>
		</div>
	);
};

export default DuaBottomBar;
