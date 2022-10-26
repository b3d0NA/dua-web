import React from "react";

const AudioVisualizer = ({ audio, player, isPlaying }) => {
	return (
		<div className="flex">
			<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-32 -mr-12 text-white -rotate-90">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
			</svg>
			<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-32 text-white rotate-90 -scale-x-[1] -mr-5">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
			</svg>
			<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-32 -ml-6 text-white rotate-90">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
			<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-32 -ml-10 text-white -rotate-90">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
			</svg>

			<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-32 -ml-10 text-white rotate-90">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
			<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-32 text-white rotate-90 -scale-x-[1] -ml-10">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
			</svg>
			<svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-32 -ml-10 text-white rotate-90">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</div>
	);
};

export default AudioVisualizer;
