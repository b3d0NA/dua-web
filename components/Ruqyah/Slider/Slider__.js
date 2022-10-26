import { useRef, useState } from "react";
import { SpectrumVisualizer, SpectrumVisualizerTheme } from "react-audio-visualizers";
import RangeSlider from "../../Widget/RangeSlder";
import PlayList from "../UI/PlayList";
const playlist = [
	{
		name: "Introduction to Ruqyah",
		src: "https://server16.mp3quran.net/nufais/Rewayat-Hafs-A-n-Assem/001.mp3",
	},
	{
		name: "Instant Ruqyah",
		src: "./assets/002255.mp3",
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

	const { name, src } = playlist[player];

	const audioRef = useRef();
	const intervalRef = useRef();
	const isReady = useRef(false);

	// const { duration } = audioRef.current;

	const startTimer = () => {
		// Clear any timers already running
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				toNextTrack();
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
	};

	const toNextTrack = () => {
		if (player < playlist.length - 1) {
			setPlayer(player + 1);
		} else {
			setPlayer(0);
		}
	};

	const handlePlayList = (id) => {
		if (player !== id) {
			setPlayer(id);
		}
	};
	// const handlePlay = () => {
	// 	setIsPlaying(!isPlaying);
	// };

	function formatTime(seconds) {
		seconds = !seconds ? 0 : seconds;
		let minutes = Math.floor(seconds / 60);
		minutes = minutes >= 10 ? minutes : "0" + minutes;
		seconds = Math.floor(seconds % 60);
		seconds = seconds >= 10 ? seconds : "0" + seconds;
		return minutes + ":" + seconds;
	}

	const handleClick = (play, pause) => {
		console.log("ajasd");
		setIsPlaying(!isPlaying);
		isPlaying ? pause() : play();
		// audioControl.current.play = play();
		// console.log(audioControl.current);
		// audioControl.current.pause = pause();
	};

	const mainActionRender = ({ play, pause }) => ({
		id: "mainActionContainer",
		node: (
			<>
				<img
					onClick={() => handleClick(play, pause)}
					src={`./assets/mediaplayer/${isPlaying ? "pause" : "play"}.svg`}
					className="h-12 xs:h-8"
					alt=""
				/>
			</>
		),
	});

	return (
		<div className="relative flex items-center mb-4 overflow-hidden bg-blue-500 bg-repeat-x h-72 xs:h-52 sm:mt-5">
			<div className="absolute w-full h-full p-6 pl-8 text-black xs:pl-6 sm:pl-5">
				<div className="flex flex-row items-start content-start justify-start ">
					<div className="flex flex-col items-start justify-between w-7/12 h-64 xs:h-44 xs:w-full">
						<p className="font-medium font-inter xs:text-sm xs:leading-4">
							{player + 1}. {name}
						</p>
						{
							<SpectrumVisualizer
								audio={src}
								theme={SpectrumVisualizerTheme.squaredBars}
								colors={["#009688", "#26a69a"]}
								backgroundColor="#3b82f6"
								highFrequency={2000}
								mainActionRender={mainActionRender}
							/>
						}
						<div className="w-full pr-16 xs:pr-2 sm:pr-10">
							<div className="w-full">
								<RangeSlider
									trackProgress={trackProgress}
									min="0"
									// max={duration ? duration : 1}
									ifChange={onScrub}
									onScrubEnd={onScrubEnd}
									className="w-full h-1 ml-4 mr-2 accent-white bg-opacity-60 bg-devider"
									// preChild={
									// 	<p className="text-black">
									// 		{audioRef.current.currentTime ? formatTime(audioRef.current.currentTime) : "00:00"}
									// 	</p>
									// }
									// child={
									// 	<p className="text-black">{audioRef.current.duration ? formatTime(audioRef.current.duration) : "00:00"}</p>
									// }
								/>
							</div>
							<div className="flex flex-row items-center justify-between mx-20 mt-4 mb-2 xs:gap-x-8 xs:mx-4 xs:mt-4 sm:mx-5">
								<img className="xs:h-4" src="./assets/mediaplayer/suffle.svg" alt="" />
								<button onClick={toPrevTrack}>
									<img className="xs:h-4" src="./assets/mediaplayer/playforward.svg" alt="" />
								</button>
								<button id="mainActionContainer"></button>
								<button onClick={toNextTrack}>
									<img className="xs:h-4" src="./assets/mediaplayer/playnext.svg" alt="" />
								</button>
								<img className="xs:h-4" src="./assets/mediaplayer/cycle.svg" alt="" />
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
