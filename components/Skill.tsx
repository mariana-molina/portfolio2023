import { urlFor } from '../sanity';
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
				viewport={{ once: true }}
				src={urlFor(skill.image).url()}
				className="h-[70px] w-[70px] min-h-[70px] min-w-[70px] object-fill md:w-22 md:h-22 lg:h-24 lg:w-24 rounded-full border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-[70px] w-[70px] md:w-22 md:h-22 lg:h-24 lg:w-24 rounded-full z-0 overflow-hidden">
				<div className="flex items-center justify-center h-full flex-col">
					<p className="text-base lg:text-xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
					<p className="text-xs lg:text-sm font-semibold text-black">
						{skill.title}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Skill;
