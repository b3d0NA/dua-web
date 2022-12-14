import { useEffect } from "react";
import Master from "../../components/Layout/Master";
import Category from "../../components/Ruqyah/Category/Category";
import Slider from "../../components/Ruqyah/Slider/Slider";
import RuqyahCatApi from "../../dataStore/api/RuqyahCatApi";
const MyApp = () => {
	useEffect(() => {
		RuqyahCatApi.getRuqyahCategory("en");
	}, []);
	return (
		<Master>
			<div className="scrl h-[calc(100vh_-_100px)] xs:pt-12 sm:pt-8 md:pt-24 lg:pt-24">
				<Slider />
				<Category />
			</div>
		</Master>
	);
};

export default MyApp;
