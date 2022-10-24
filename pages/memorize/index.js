import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Master from "../../components/Layout/Master";
import Card from "../../components/Memorize/Card";
import { setPlans } from "../../dataStore/feature/MemorizationSlicer";
import isValidJson from "../../dataStore/functions/isValidJson";
const MyApp = () => {
	const { plans } = useSelector((state) => state.memorization);
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem("memorizations") && isValidJson(localStorage.getItem("memorizations"))) {
			const localMemorizations = localStorage.getItem("memorizations");
			dispatch(setPlans(JSON.parse(localMemorizations)));
		}
	}, [dispatch]);
	return (
		<Master>
			<div className="scrl h-[calc(100vh_-_80px)] md:pt-24 lg:pt-24">
				<h5 className="font-medium text-lg text-[#373737] flex justify-start mb-4 ">Memorization List:</h5>
				<div className="grid mb-6 gap-x-6 gap-y-4 xs:gap-y-3 xs:pb-10 sm:grid-cols-2 sm:gap-x-4 sm:pb-10 md:grid-cols-2 md:gap-x-4 md:pb-8 lg:grid-cols-3 lg:pb-10 xl:grid-cols-3 xl:pb-16 2xl:grid-cols-3 2xl:pb-16 3xl:grid-cols-3 3xl:pb-16">
					{!_.isEmpty(plans) ? (
						Object.values(plans).map((plan, index) => {
							const totalSelected = plan.duas.filter((dua) => {
								return dua[0]?.isSelected;
							}).length;

							const maxDate = new Date(plan.created_at).getDate() + plan.day;
							const remaining = maxDate - new Date().getDate();
							return (
								<Card
									key={index}
									day={plan.day}
									name={plan.plan}
									selected={totalSelected}
									remaining={remaining}
									completed={totalSelected + "/" + plan.duas.length}
									percentage={Math.round((totalSelected / plan.duas.length) * 100) + "%"}
								/>
							);
						})
					) : (
						<p className="text-center ">No plan was created!</p>
					)}
				</div>
			</div>
		</Master>
	);
};

export default MyApp;
