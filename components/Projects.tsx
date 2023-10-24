'use client';

import React from 'react';
import { Project, Project as ProyectType } from '@/typings';
import { urlFor } from '../sanity';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 10;

type ProjectProps = {
	projects: ProyectType[];
};

function Projects({ projects }: ProjectProps) {
	return (
		<div className="h-screen relative flex flex-col space-y-7 overflow-hidden md:space-y-0 items-center z-0 pt-[27%] md:pt-[8%] lg:pt-[5%]">
			<div className="flex flex-col items-center text-center space-y-5">
				<h3 className="mainTitles">Projects</h3>
				<h3 className="uppercase tracking-[3px] text-gray-500 text-sm px-5  text-center">
					Scroll right to see all the projects
				</h3>
			</div>
			<div className="w-full h-[88%] flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{projects.map((project: Project, i) => (
					<div
						key={project._id}
						className="w-screen px-10 flex-shrink-0 snap-center"
					>
						<div className="md:w-[75%] md:ml-[13%] h-[100%] flex flex-col justify-evenly items-center md:flex-row md:space-x-10">
							<Image
								src={urlFor(project.image).url()}
								alt={project.title}
								width={0}
								height={0}
								sizes="100vw"
								className={`
							${
								project.isItMovile
									? 'object-fill rounded-2xl w-[150px] h-[250px]'
									: 'rounded-lg object-cover w-[250px] h-[250px]'
							} 
							 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] `}
							/>
							<div className="space-y-5 md:px-5">
								<h4 className="text-2xl md:text-2xl lg:text-4xl md:text-left font-semibold text-center">
									<span className="underline decoration-[#F7AB0A]">
										Case {i + 1} of {projects.length}:
									</span>{' '}
									{project.title}
								</h4>
								<p className="text-sm text-justify md:text-base md:text-left lg:text-2xl">
									{project.summary}
								</p>
								<div className="flex flex-row space-x-4 items-center justify-center md:justify-start">
									<Link
										target="_blank"
										href={project.linkToBuild}
										className="heroButton shadow-md font-bold"
									>
										To code
									</Link>
									{project.linkToDeploy && (
										<Link
											target="_blank"
											href={project.linkToDeploy}
											className="heroButton shadow-md font-bold"
										>
											To demo
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
		</div>
	);
}

export default Projects;
