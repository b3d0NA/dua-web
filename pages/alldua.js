import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Master from "../components/Layout/Master";
import DuaPopup from "../components/Modal/DuaPopup/DuaPopup";
import NumCard from "../components/Utils/NumCard";

const AllDua = () => {
	const duasBag = useSelector((state) => state.duaSearch.data?.result);
	const loading = useSelector((state) => state.duaSearch.loading);
	const { language } = useSelector((state) => state.globalData.settings);
	const [modalShow, setModalShow] = useState(false);
	const [duasBucket, setDuasBucket] = useState([]);

	useEffect(() => {
		if (duasBag) {
			let duas = duasBag.reduce((r, e) => {
				let group = language === "en" ? e.dua_name_en && e.dua_name_en[0] : e.dua_name_bn && e.dua_name_bn[0];

				if (group) {
					if (!r[group]) r[group] = { group, children: [e] };
					else r[group].children.push(e);
				}
				return r;
			}, {});
			setDuasBucket(Object.values(duas).sort((a, b) => a.group?.localeCompare(b.group)));
		}
	}, [duasBag, language]);
	return (
		<Master title={language === "en" ? "All Dua" : "সব দুয়া"}>
			{loading ? (
				<svg className="w-5 h-5 m-auto text-gray-800 animate-spin" fill="none" viewBox="0 0 24 24">
					<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
			) : (
				<div
					className="animate-fade-in-up scroll-smooth scrl h-[calc(100vh_-_100px)]
      xs:pb-16 sm:pb-8 md:pb-4 md:pt-20 lg:pt-20 lg:pb-6 xl:pb-16 2xl:pb-16 3xl:pb-16
      ">
					{duasBucket.map((duaBucket, index) => {
						return (
							<div id={duaBucket.group} key={index}>
								<button
									type="button"
									onClick={() => setModalShow(true)}
									className="flex items-center justify-center text-lg font-medium leading-tight text-black uppercase transition duration-150 ease-in-out bg-blue-400 h-11 w-11 xs:mt-0 md:mt-5 lg:mt-5">
									{duaBucket.group}
								</button>
								<div className="grid grid-cols-3 my-8 gap-x-7 gap-y-4 xs:grid-cols-1 xs:gap-y-3 xs:m-0 xs:mt-4 sm:grid-cols-1 sm:gap-x-4 md:grid-cols-2 md:gap-x-4 lg:grid-cols-2 lg:gap-x-4">
									{duaBucket.children.map((dua, index) => {
										return (
											<NumCard
												key={index}
												link={"/dua/" + dua.cat_id + "/" + dua.dua_id}
												title={language === "en" ? dua.dua_name_en && dua.dua_name_en : dua.dua_name_bn && dua.dua_name_bn}
												text={duaBucket.group}
											/>
										);
									})}
								</div>
							</div>
						);
					})}
					<Rodal
						showCloseButton={false}
						width={700}
						height={500}
						customStyles={{ backgroundColor: "transparent", borderRadious: "none", boxShadow: "none" }}
						visible={modalShow}
						onClose={() => setModalShow(false)}>
						<DuaPopup duas={duasBucket} onClose={() => setModalShow(false)} />
					</Rodal>
				</div>
			)}
		</Master>
	);
};

export default AllDua;
