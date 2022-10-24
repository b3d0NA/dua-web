import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Memorize from "../Modal/Edit/Memorize";

const Card = (props) => {
	const [modalShow, setModalShow] = useState(false);
	const { theme } = useTheme();
	return (
		<div className="bg-red-100 w-full max-h-max  p-5 border-[.5px] border-solid border-devider dark:bg-[#223449] dark:border-none animate-fade-in-up">
			<div className="flex items-center justify-between ">
				<Link href={"/memorize/details/" + props.name}>
					<p className="cursor-pointer font-inter text-left font-semibold text-md text-[#373737] sm:text-base ">{props.name}</p>
				</Link>
				<button
					onClick={() => setModalShow(true)}
					type="button"
					className="text-lg font-medium leading-tight text-black uppercase transition duration-150 ease-in-out">
					{theme === "dark" ? <img src="/assets/others/dark/threeDot.svg" alt="" /> : <img src="/assets/others/threeDot.svg" alt="" />}
				</button>
			</div>
			<Link href={"/memorize/details/" + props.name}>
				<div className="cursor-pointer">
					<div>
						<p
							className="flex mt-3 text-sm font-normal text-title opacity-80 font-inter xs:text-sm xs:leading-6 sm:text-sm lg:text-base ">
							{" "}
							Total Selected Duas: {props.selected}
						</p>
						<p
							className="flex text-sm font-normal text-title opacity-80 font-inter xs:text-sm xs:leading-6 sm:text-sm lg:text-base ">
							{" "}
							Days Remaining: {props.remaining}
						</p>
						<p
							className="flex mb-4 text-sm font-normal text-title opacity-80 font-inter xs:text-sm xs:leading-6 sm:text-sm lg:text-base ">
							{" "}
							Completed Dua: {props.completed}
						</p>
					</div>

					<div className="w-full bg-devider  h-2.5 mb-1.5">
						<div className="bg-[#60a5fa] h-2.5 " style={{ width: props.percentage }}></div>
					</div>

					<p className="flex justify-end ml-2 text-xs font-normal text-title opacity-80 font-inter ">{props.percentage} Completed</p>
				</div>
			</Link>
			<Rodal
				showCloseButton={false}
				width={500}
				height={500}
				customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
				visible={modalShow}
				onClose={() => setModalShow(false)}>
				<Memorize name={props.name} day={props.day} onClose={() => setModalShow(false)} />
			</Rodal>
		</div>
	);
};

export default Card;
