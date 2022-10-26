import React, { useEffect, useRef } from "react";

const AudioVisualizer = ({ audio, player, isPlaying }) => {
	const context = useRef();
	const source = useRef();
	const analyser = useRef();
	const dataArray = useRef();
	const ctx = useRef();
	// const barHeight = useRef();
	const rafId = useRef();

	const canvas = useRef();

	useEffect(() => {
		if (!source.current) {
			context.current = new (window.AudioContext || window.webkitAudioContext)();
			source.current = context?.current?.createMediaElementSource(audio);
			analyser.current = context?.current?.createAnalyser();
			source.current.connect(analyser.current);
			analyser.current.connect(context?.current?.destination);
		}

		if (analyser.current) analyser.current.fftSize = 256;
		const bufferLength = analyser.current.frequencyBinCount;
		// dataArray.current = new Uint8Array(Array.from(Array(bufferLength / 2), () => Math.random() * 255));
		console.log(bufferLength);
		dataArray.current = new Uint8Array(bufferLength);
	}, [player, audio]);

	useEffect(() => {
		if (canvas.current) {
			canvas.current.width = 600;
			canvas.current.height = 130;
			ctx.current = canvas.current.getContext("2d");
		}
	}, [player]);

	useEffect(() => {
		console.log(audio);

		// ctx && renderFrame();
	}, [player, audio]);

	var WIDTH = canvas?.current?.width;
	var HEIGHT = canvas?.current?.height;

	var barWidth = (WIDTH / analyser.current?.frequencyBinCount) * 2.5;
	var x = 0;

	function renderFrame() {
		x = 0;

		// analyser.current.getByteFrequencyData(dataArray.current);
		ctx.current.fillStyle = "#fff";
		ctx.current.fillRect(0, 0, WIDTH, HEIGHT); //background
		// console.log(analyser.current);

		for (var i = 0; i < analyser.current.frequencyBinCount; i++) {
			let barHeight = dataArray.current[i];

			var r = barHeight + 25 * (i / analyser.current.frequencyBinCount);
			var g = 250 * (i / analyser?.current.frequencyBinCount);
			var b = 50;
			console.log(dataArray.current);

			ctx.current.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
			ctx.current.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
			// ctx.current.fillRect(10, 10, 10, 10);

			x += barWidth + 1;
		}
	}

	const startAnimation = () => {
		renderFrame();
		analyser.current.getByteTimeDomainData(dataArray.current);
		rafId.current = requestAnimationFrame(startAnimation);
	};
	useEffect(() => {
		if (isPlaying) {
			rafId.current = requestAnimationFrame(startAnimation);
		} else {
			cancelAnimationFrame(rafId.current);
		}
	}, [isPlaying]);

	useEffect(() => {
		return () => {
			cancelAnimationFrame(rafId.current);
			analyser.current.disconnect();
			source.current.disconnect();
		};
	}, []);
	// var src;
	// if (MEDIA_ELEMENT_NODES.has(audio)) {
	// 	src = MEDIA_ELEMENT_NODES.get(audio);
	// } else {
	// 	src = context.createMediaElementSource(audio);
	// 	MEDIA_ELEMENT_NODES.set(audio, src);
	// }
	// var src = context.createMediaElementSource(audio);
	// console.log(src);
	// var analyser = context.createAnalyser();

	// src.connect(analyser);
	// analyser.connect(context.destination);

	return <canvas ref={canvas}></canvas>;
};

export default AudioVisualizer;
