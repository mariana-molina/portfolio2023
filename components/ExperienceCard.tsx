import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function ExperienceCard() {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
			{/* CHANGE TO NEXT IMAGE */}
			<motion.img
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				src={
					'https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ub7eegbnar75j6slgkkm'
				}
				alt=""
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center bg-white"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">Student Assistant</h4>
				<p className="font-bold text-2xl mt-1">
					National University of San Juan
				</p>
				<div className="flex space-x-2 my-2">
					<Image
						src={
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg'
						}
						alt=""
						width={40}
						height={40}
						className="rounded-full"
					/>
				</div>
				<p className="uppercase py-5 text-gray-300">
					Started work.... - Ended...
				</p>
				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>summary points</li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</article>
	);
}

export default ExperienceCard;
