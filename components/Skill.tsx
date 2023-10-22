import { urlFor } from '@/sanity';
import { Skill } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react';

type SkillProps = {
	skill: Skill;
};

function Skill({ skill }: SkillProps) {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{
					scale: 0.7,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, scale: 1 }}
				// viewport={{ once: true }}
				src={urlFor(skill.image).url()}
				className="h-20 w-20 min-h-[80px] min-w-[80px] object-fill md:w-28 md:h-28 xl:h-36 xl:w-36 rounded-full border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28  xl:h-36 xl:w-36 rounded-full z-0">
				<div className="flex items-center justify-center h-full flex-col ">
					<p className="text-2xl md:text-3xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
					<p className="text-xs md:text-base font-semibold text-black overflow-hidden">
						{skill.title}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Skill;
