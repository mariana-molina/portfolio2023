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
			className="h-screen flex flex-col text-center justify-evenly md:text-left max-w-7xl px-10 mx-auto items-center pt-[20%] md:pt-[5%] lg:pt-[3%]"
		>
			<h3 className="mainTitles">About</h3>
			<div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-10 lg:space-x-14">
				<motion.img
					initial={{ x: -200, opacity: 0 }}
					transition={{ duration: 1.2 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					className="h-40 w-40 rounded-full object-cover md:rounded-lg md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] "
					src={urlFor(pageInfo?.profilePic).url()}
				/>
				<div className="space-y-4">
					<h4 className="text-2xl md:text-4xl font-semibold">
						Here is a{' '}
						<span className="underline decoration-[#F7AB0A]">little</span>{' '}
						background
					</h4>
					<p className="text-sm md:text-base lg:text-lg text-justify">
						{pageInfo.backgroundInformation}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
