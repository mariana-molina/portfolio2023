'use client';
import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import profile from '../public/profilepic-min.jpeg';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type HeroProps = {
	pageInfo: PageInfo;
};

function Hero({ pageInfo }: HeroProps) {
	const [text, count] = useTypewriter({
		words: [
			`Hi, my name is Mariana Molina`,
			'I-love-coffe.tsx',
			'<ButILoveCodingEvenMore />',
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				src={urlFor(pageInfo?.heroImage).url()}
				alt="Profile picture"
				width={200}
				height={200}
				className="relative rounded-full mx-auto object-cover"
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					{pageInfo?.role}
				</h2>
				<h1 className="text-2xl lg:text-5xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>

				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					{/* <Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link> */}
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
