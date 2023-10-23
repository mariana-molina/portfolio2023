'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '@/typings';

type SkillsProps = {
	skills: SkillType[];
};

function Skills({ skills }: SkillsProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex relative flex-col text-center max-w-7xl min-h-screen justify-center mx-auto items-center"
		>
			<h3 className="mainTitles">Skills</h3>
			<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm px-5">
				Hover over a skill for current proficiency
			</h3>
			<div className="mt-28 md:mt-36 xl:mt-40 grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
				{skills.map(skill => (
					<Skill key={skill._id} skill={skill} />
				))}
			</div>
		</motion.div>
	);
}

export default Skills;
