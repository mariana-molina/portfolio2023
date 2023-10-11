'use client';

import React from 'react';
import { motion } from 'framer-motion';

function About() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>

			<motion.img
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				// height={224}
				// width={224}
				className="-mb-20 h-56 w-56 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
				src="https://catastic.b-cdn.net/wp-content/uploads/2019/12/munchkin-kitten.jpg"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{' '}
					<span className="underline decoration-[rgb(213,202,1)]">little</span>{' '}
					background
				</h4>
				<p className="text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
					veritatis excepturi maiores itaque, nihil voluptatibus rem, error quos
					distinctio odit, suscipit facere consectetur libero voluptates
					doloribus asperiores ducimus odio atque?
				</p>
			</div>
		</motion.div>
	);
}

export default About;
