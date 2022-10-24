import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import DeletePopup from "../../Modal/DeletePopup/DeletePopup";
import RangeSlider from "../../Widget/RangeSlder";
const Botombar = ({ copy, plan, deleteDua, duaLink, audio }) => {
	const [modalShow, setModalShow] = useState(false);
	const { theme } = useTheme();
	const [hidden, setHidden] = useState("hidden");
	const [play, setPlay] = useState("audiobtn");
	const [suffle, setSuffle] = useState("suffle");

	const [trackIndex, setTrackIndex] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0);

	const audioRef = useRef(new Audio(audio));
	const intervalRef = useRef();
	const isReady = useRef(false);

	const { duration } = audioRef.current;

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				setPlay("pause");
			} else {
				setTrackProgress(audioRef.current.currentTime + 1);
			}
		}, [1000]);
	};

	const onScrub = (value) => {
		// Clear any timers already running
		clearInterval(intervalRef.current);
		audioRef.current.currentTime = value;
		setTrackProgress(audioRef.current.currentTime + 1);
	};

	const onScrubEnd = () => {
		// If not already playing, start
		if (play === "audiobtn") {
			setPlay("pause");
		}
		startTimer();
	};

	useEffect(() => {
		if (play === "pause") {
			audioRef.current.play();
			startTimer();
		} else {
			audioRef.current.pause();
		}
	}, [play]);

	useEffect(() => {
		audioRef.current.pause();

		audioRef.current = new Audio(audio);
		setTrackProgress(audioRef.current.currentTime + 1);

		if (!isReady.current) {
			isReady.current = true;
		}
	}, [trackIndex, audio]);

	useEffect(() => {
		// Pause and clean up on unmount
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	const handleHidden = () => {
		if (hidden === "hidden") {
			setHidden("block");
		} else {
			setHidden("hidden");
		}
		if (play === "audiobtn") {
			setPlay("pause");
		} else {
			setPlay("audiobtn");
		}
	};
	const handleSuffle = () => {
		if (suffle === "suffle") {
			setSuffle("activeSuffle");
		} else {
			setSuffle("suffle");
		}
	};
	function formatTime(seconds) {
		let minutes = Math.floor(seconds / 60);
		minutes = minutes >= 10 ? minutes : "0" + minutes;
		seconds = Math.floor(seconds % 60);
		seconds = seconds >= 10 ? seconds : "0" + seconds;
		return minutes + ":" + seconds;
	}
	return (
		<div className="">
			<div className="w-full h-[1px] bg-[#E2E2E2] dark:hidden"></div>
			<div className={`${play === "pause" ? " xs:flex-col xs:px-6 xs:justify-center xs:items-center" : "flex-row"} flex justify-between px-6 `}>
				<div className="flex py-4">
					<img onClick={() => handleHidden()} src={`/assets/others/${play}.svg`} alt="" />
					<RangeSlider
						trackProgress={trackProgress}
						max={duration ? duration : `${duration}`}
						ifChange={onScrub}
						onScrubEnd={onScrubEnd}
						mt=""
						style={`w-72 h-1 accent-green-600 bg-opacity-60 bg-devider ml-4 mr-2 xs:w-52 sm:w-32 transition duration-1000 delay-1000 ${
							hidden === "hidden" ? "hidden" : ""
						}`}
						preChild={
							<p className={`font-poppins font-normal text-sm leading-6 text-title  ${hidden}`}>
								{formatTime(audioRef.current.currentTime + 1)}
							</p>
						}
						child={
							<p className={`font-poppins font-normal text-sm leading-6 text-title mr-2  ${hidden}`}>
								{formatTime(audioRef.current.duration)}
							</p>
						}
					/>
					{theme === "dark" ? (
						<img className={hidden} src="/assets/memorize/suffle-white.svg" alt="" />
					) : (
						<img className={hidden} onClick={handleSuffle} src={`/assets/memorize/${suffle}.svg`} alt="" />
					)}
				</div>
				<div className="flex flex-row py-6 gap-x-8">
					<button onClick={copy}>
						{theme === "dark" ? <img src="/assets/others/dark/copy.svg" alt="" /> : <img src="/assets/others/copy.svg" alt="" />}
					</button>
					<button onClick={() => setModalShow(true)}>
						{theme === "dark" ? (
							<img src="/assets/others/dark/deleteBtn.svg" alt="" />
						) : (
							<img src="/assets/others/deleteBtn.svg" alt="" />
						)}
					</button>
					<Link href={duaLink} className="cursor-pointer">
						{theme === "dark" ? (
							<img className="cursor-pointer" src="/assets/others/dark/direct.svg" alt="" />
						) : (
							<img className="cursor-pointer" src="/assets/others/direct.svg" alt="" />
						)}
					</Link>
					{theme === "dark" ? <img src="/assets/others/dark/share.svg" alt="" /> : <img src="/assets/others/share.svg" alt="" />}
				</div>
				<Rodal
					showCloseButton={false}
					width={500}
					height={300}
					customStyles={{ backgroundColor: "transparent", boxShadow: "none" }}
					visible={modalShow}
					onClose={() => setModalShow(false)}>
					<DeletePopup
						deleteDua={deleteDua}
						message={"Do you want to delete this dua from '" + plan + "'  folder?"}
						onClose={() => setModalShow(false)}
					/>
				</Rodal>
			</div>
		</div>
	);
};

export default Botombar;
