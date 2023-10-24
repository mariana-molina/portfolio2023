'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '../sanity';

type AboutProps = {
	pageInfo: PageInfo;
};

function About({ pageInfo }: AboutProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex flex-col relative text-center justify-center md:text-left md:flex-row max-w-7xl px-10 mx-auto items-center"
		>
			<h3 className="mainTitles">About</h3>
			<div className="mt-28 md:mt-32 flex flex-col items-center space-y-4 md:flex-row md:space-x-10 xl:space-x-14">
				<motion.img
					initial={{ x: -200, opacity: 0 }}
					transition={{ duration: 1.2 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					className="h-40 w-40 rounded-full object-cover md:rounded-lg md:w-[350px] md:h-[450px] xl:w-[400px] xl:h-[500px] "
					src={urlFor(pageInfo?.profilePic).url()}
				/>
				<div className="space-y-4">
					<h4 className="text-2xl md:text-4xl font-semibold">
						Here is a{' '}
						<span className="underline decoration-[#F7AB0A]">little</span>{' '}
						background
					</h4>
					<p className="text-sm md:text-base xl:text-lg text-justify">
						{pageInfo.backgroundInformation}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
