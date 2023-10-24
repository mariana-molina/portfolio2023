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
			className="h-screen flex flex-col text-center max-w-7xl min-h-screen justify-evenly mx-auto items-center md:pt-[5%] lg:pt-[3%]"
		>
			<div className="space-y-5">
				<h3 className="mainTitles">Skills</h3>
				<h3 className="uppercase tracking-[3px] text-gray-500 text-sm px-5">
					Hover over a skill for current proficiency
				</h3>
			</div>
			<div className="grid grid-cols-4 md:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
				{skills.map(skill => (
					<Skill key={skill._id} skill={skill} />
				))}
			</div>
		</motion.div>
	);
}

export default Skills;
