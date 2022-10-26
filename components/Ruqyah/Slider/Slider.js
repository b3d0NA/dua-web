import { useEffect, useRef, useState } from "react";
import RangeSlider from "../../Widget/RangeSlder";
import AudioVisualizer from "../UI/AudioVisualizer.js";
import PlayList from "../UI/PlayList";
const playlist = [
	{
		name: "Introduction to Ruqyah",
		src: "https://server16.mp3quran.net/nufais/Rewayat-Hafs-A-n-Assem/001.mp3",
	},
	{
		name: "Instant Ruqyah",
		src: "https://www.hadithbd.com/audio/002255.mp3",
	},
	{
		name: "Protect Yourself From Jinn",
		src: "https://server16.mp3quran.net/nufais/Rewayat-Hafs-A-n-Assem/114.mp3",
	},
	{
		name: "Black Magic",
		src: "https://server16.mp3quran.net/nufais/Rewayat-Hafs-A-n-Assem/113.mp3",
	},
];

const Slider = () => {
	const [componentLoaded, setComponentLoaded] = useState(0);
	const [player, setPlayer] = useState(0);

	// const [trackIndex, setTrackIndex] = useState(0);
	const [trackProgress, setTrackProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isReplay, setIsReplay] = useState(false);

	const { name, src } = playlist[player];

	const audioRef = useRef(typeof Audio !== "undefined" && new Audio(src));
	const intervalRef = useRef();
	const isReady = useRef(false);

	const { duration } = audioRef.current;

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				if (isReplay) {
					setTrackProgress(0);
					audioRef.current.play();
					setIsPlaying(true);
				} else {
					setTrackProgress(0);
					toNextTrack();
				}
			} else {
				setTrackProgress(audioRef.current.currentTime);
			}
		}, [1000]);
	};

	const onScrub = (value) => {
		// Clear any timers already running
		clearInterval(intervalRef.current);
		audioRef.current.currentTime = value;
		setTrackProgress(audioRef.current.currentTime);
	};

	const onScrubEnd = () => {
		// If not already playing, start
		if (!isPlaying) {
			setIsPlaying(true);
		}
		startTimer();
	};

	const toPrevTrack = () => {
		if (player - 1 < 0) {
			setPlayer(playlist.length - 1);
		} else {
			setPlayer(player - 1);
		}
		setTrackProgress(0);
	};

	const toNextTrack = () => {
		if (player < playlist.length - 1) {
			setPlayer(player + 1);
		} else {
			setPlayer(0);
		}
		setTrackProgress(0);
	};

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
			startTimer();
			setComponentLoaded((old) => old + 1);
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		audioRef.current.pause();

		audioRef.current = typeof Audio !== "undefined" && new Audio(src);
		setTrackProgress(audioRef.current.currentTime);

		if (isReady.current && componentLoaded > 1) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			setIsPlaying(false);
			isReady.current = true;
		}
	}, [player, src]);

	useEffect(() => {
		setComponentLoaded((old) => old + 1);
	}, []);

	useEffect(() => {
		// Pause and clean up on unmount
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	const handlePlayList = (id) => {
		if (player !== id) {
			setTrackProgress(0);
			setPlayer(id);
		}
	};
	const handlePlay = () => {
		setIsPlaying(!isPlaying);
	};

	function formatTime(seconds) {
		seconds = !seconds ? 0 : seconds;
		let minutes = Math.floor(seconds / 60);
		minutes = minutes >= 10 ? minutes : "0" + minutes;
		seconds = Math.floor(seconds % 60);
		seconds = seconds >= 10 ? seconds : "0" + seconds;
		return minutes + ":" + seconds;
	}

	return (
		<div className="relative flex items-center mb-4 overflow-hidden bg-blue-500 bg-repeat-x h-72 xs:h-52 sm:mt-5">
			<div className="absolute w-full h-full p-6 pl-8 text-black xs:pl-6 sm:pl-5">
				<div className="flex flex-row items-start content-start justify-start ">
					<div className="flex flex-col items-start justify-between w-7/12 h-64 xs:h-44 xs:w-full">
						<p className="font-medium font-inter xs:text-sm xs:leading-4">
							{player + 1}. {name}
						</p>
						{isReady.current && <AudioVisualizer isPlaying={isPlaying} player={player} audio={audioRef.current} />}
						{!isReady.current && (
							<svg className="w-5 h-5 m-auto text-gray-800 animate-spin" fill="none" viewBox="0 0 24 24">
								<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
						)}
						<div className="w-full pr-16 xs:pr-2 sm:pr-10">
							<div className="w-full">
								<RangeSlider
									trackProgress={trackProgress}
									min="0"
									max={duration ? duration : 1}
									ifChange={onScrub}
									onScrubEnd={onScrubEnd}
									className="w-full h-1 ml-4 mr-2 accent-white bg-opacity-60 bg-devider"
									preChild={
										<p className="text-black">
											{audioRef.current.currentTime ? formatTime(audioRef.current.currentTime) : "00:00"}
										</p>
									}
									child={
										<p className="text-black">{audioRef.current.duration ? formatTime(audioRef.current.duration) : "00:00"}</p>
									}
								/>
							</div>
							<div className="flex flex-row items-center justify-between mx-20 mt-4 mb-2 xs:gap-x-8 xs:mx-4 xs:mt-4 sm:mx-5">
								<img className="xs:h-4" src="./assets/mediaplayer/suffle.svg" alt="" />
								<button onClick={toPrevTrack}>
									<img className="xs:h-4" src="./assets/mediaplayer/playforward.svg" alt="" />
								</button>
								<img
									onClick={handlePlay}
									src={`./assets/mediaplayer/${isPlaying ? "pause" : "play"}.svg`}
									className="h-12 xs:h-8"
									alt=""
								/>
								<button onClick={toNextTrack}>
									<img className="xs:h-4" src="./assets/mediaplayer/playnext.svg" alt="" />
								</button>
								<button onClick={() => setIsReplay(!isReplay)}>
									<svg
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className={`w-6 h-6 ${!isReplay ? "text-stone-400" : "text-white"}`}>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div className="w-5/12 xs:hidden">
						<div className="flex flex-col w-full">
							<p className="flex flex-row">Playlist</p>
							<hr className="mt-2 opacity-50 bg-hr" />
							<div className="flex flex-col items-start mt-5 gap-y-4">
								{playlist.map((audio, index) => {
									const count = index;
									return (
										<PlayList
											key={index}
											play={player === count ? true : false}
											onClick={() => handlePlayList(count)}
											name={`${count + 1}. ${audio.name}`}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
