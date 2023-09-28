'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

function Header() {
	return (
		<header className="sticky top-0 flex items-start justify-between max-w-7-xl mx-auto z-20 p-5 xl:items-center">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center"
			>
				<SocialIcon
					url="https://www.linkedin.com/in/marianasoledadmolina/"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.github.com/mariana-molina"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.instagram.com/marmolina_"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>

			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{ duration: 1.5 }}
				className="flex flex-row text-gray-300 items-center cursor-pointer"
			>
				<SocialIcon
					network="email"
					className="cursor-pointer"
					fgColor="gray"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
					Get in touch
				</p>
			</motion.div>
		</header>
	);
}

export default Header;
