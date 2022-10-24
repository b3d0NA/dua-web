import { useTheme } from "next-themes";
import Link from "next/link";

const Botombar = ({ copyDua, path }) => {
	const { theme } = useTheme();
	return (
		<div className="">
			<hr className="bg-hr dark:hidden" />
			<div className="flex flex-row justify-between px-6">
				<div className="py-4 ">{/* <img src="/assets/audiobtn.svg" alt="" /> */}</div>
				<div className="flex flex-row py-6 gap-x-8">
					<button onClick={copyDua}>
						{theme === "dark" ? <img src="/assets/others/dark/copy.svg" alt="" /> : <img src="/assets/others/copy.svg" alt="" />}
					</button>
					<Link href={path}>
						{theme === "dark" ? (
							<img className="cursor-pointer" src="/assets/others/dark/direct.svg" alt="" />
						) : (
							<img className="cursor-pointer" src="/assets/others/direct.svg" alt="" />
						)}
					</Link>
					{theme === "dark" ? <img src="/assets/others/dark/share.svg" alt="" /> : <img src="/assets/others/share.svg" alt="" />}
					{theme === "dark" ? <img src="/assets/others/dark/report.svg" alt="" /> : <img src="/assets/others/report.svg" alt="" />}
				</div>
			</div>
		</div>
	);
};

export default Botombar;
