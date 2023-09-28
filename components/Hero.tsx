'use client';
import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import profile from '../public/profilepic-min.jpeg';

function Hero() {
	const [text, count] = useTypewriter({
		words: [
			"Hi, I'm Mariana Molina",
			'I-love-coffe.tsx',
			'<ButILoveCodingMore />',
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				src={profile}
				alt="Profile picture"
				width={110}
				height={110}
				className="relative rounded-full mx-auto object-cover"
			/>
			<h1>
				<span>{text}</span>
				<Cursor cursorColor="rgb(213,202,1)" />
			</h1>
		</div>
	);
}

export default Hero;
