import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Bookmark from "../Modal/Edit/Bookmark/Bookmark";

const Card = ({ folder, path, totalDuas, bookmark }) => {
	const [modalShow, setModalShow] = useState(false);
	const { theme } = useTheme();
	return (
		<>
			<div className="bg-red-100 w-full h-[6.625rem]  p-3 border-[.5px] border-solid border-devider px-5 dark:bg-[#223449] dark:border-none animate-fade-in-up">
				<div className="flex items-center justify-between">
					<Link href={`${path}`}>
						<div className="flex items-center justify-start cursor-pointer">
							<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" style={{ color: bookmark.color }}>
								<path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
								<path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
							</svg>

							<p
								className="font-inter text-left font-semibold text-lg text-[#373737] mt-2 ml-2.5 xs:text-base 
              sm:text-base ">
								{bookmark.bookmark}
							</p>
						</div>
					</Link>

					<div className="flex items-center justify-start">
						{theme === "dark" ? (
							<img className="mr-4" src="/assets/others/dark/maximizeLogo.svg" alt="" />
						) : (
							<img className="mr-4" src="/assets/others/maximizeLogo.svg" alt="" />
						)}

						<button
							onClick={() => setModalShow(true)}
							type="button"
							className="text-lg font-medium leading-tight text-black uppercase transition duration-150 ease-in-out">
							{theme === "dark" ? (
								<img src="/assets/others/dark/threeDot.svg" alt="" />
							) : (
								<img src="/assets/others/threeDot.svg" alt="" />
							)}
						</button>
					</div>
				</div>
				<Link href={`${path}`}>
					<p className="flex mt-3 mb-5 ml-10 text-sm font-normal cursor-pointer text-title opacity-80 font-inter lg:text-base sm:text-xs ">
						{" "}
						Total Duas: {totalDuas}
					</p>
				</Link>
			</div>
			<Rodal
				showCloseButton={false}
				width={500}
				height={500}
				customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
				visible={modalShow}
				onClose={() => setModalShow(false)}>
				<Bookmark name={bookmark.bookmark} color={bookmark.color} onClose={() => setModalShow(false)} />
			</Rodal>
		</>
	);
};

export default Card;
