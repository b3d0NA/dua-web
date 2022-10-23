import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Master from "../../../components/Layout/Master";
import MemorizeDetails from "../../../components/Memorize/Details/DetailsCard";
import { setPlans } from "../../../dataStore/feature/MemorizationSlicer";
import isValidJson from "../../../dataStore/functions/isValidJson";
const MyApp = () => {
	const { plans } = useSelector((state) => state.memorization);
	const { query } = useRouter();
	const dispatch = useDispatch();

	const [duas, setDuas] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("memorizations") && isValidJson(localStorage.getItem("memorizations"))) {
			const localMemorizations = localStorage.getItem("memorizations");
			dispatch(setPlans(JSON.parse(localMemorizations)));
		}
	}, [dispatch]);

	useEffect(() => {
		if (plans[query.plan]) {
			setDuas(plans[query.plan].duas);
		}
	}, [query.plan, plans]);

	return (
		<Master>
			<div
				className="scrl h-[calc(100vh_-_100px)] 
      xs:pb-10
      sm:pb-10
      md:pt-24 md:pb-5
      lg:pt-24 lg:pb-5
      xl:pb-16
      2xl:pb-16
      3xl:pb-16">
				{duas.length !== 0 ? (
					duas.map((dua, index) => {
						return <MemorizeDetails key={index} dua={dua} plan={query.plan} />;
					})
				) : (
					<p className="p-2 text-center">No dua available</p>
				)}
			</div>
		</Master>
	);
};

export default MyApp;
