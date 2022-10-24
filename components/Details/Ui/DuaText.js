import Link from "next/link";

export default function DuaText(props) {
	return (
		<Link href={`/dua/${props.catId}/${props.duaId}`}>
			<div className="flex flex-row ">
				<img src="/assets/duaarrow.svg" className="mr-2 -translate-y-1" alt="" />
				<p className="font-inter text-2xs text-mute-grey my-3 text-left w-[95%] dark:text-[#8d9db4]">{props.name}</p>
			</div>
		</Link>
	);
}
