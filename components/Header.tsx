'use client';
import React from 'react';

import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '@/typings';
import Link from 'next/link';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type HeaderProps = {
	socials: Social[];
};

function Header({ socials }: HeaderProps) {
	const notify = () =>
		toast('Copied link to: https://portfolio-mariana-molina.vercel.app/', {
			containerId: 'B',

			toastId: '2309273984728734',
			autoClose: 2000,
			hideProgressBar: true,
			position: 'bottom-center',
			draggable: false,
			theme: 'dark',
			pauseOnFocusLoss: false,
			pauseOnHover: false,
			transition: Slide,
		});
	return (
		<header className="sticky top-0 flex items-start justify-between max-w-7-xl mx-auto z-20 p-5 xl:px-10 xl:items-center">
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
				{socials.map((social: any) => {
					return (
						<SocialIcon
							target="_blank"
							key={social._id}
							url={social.url}
							fgColor="gray"
							bgColor="transparent"
						/>
					);
				})}
				<SocialIcon
					onClick={() => {
						navigator.clipboard.writeText(
							'https://portfolio-mariana-molina.vercel.app/'
						);
						notify();
					}}
					className="cursor-pointer"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>
			<ToastContainer enableMultiContainer containerId={'B'} />
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
					href="#contact"
					network="email"
					className="cursor-pointer"
					fgColor="gray"
					bgColor="transparent"
				/>
				<Link href={'#contact'}>
					<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
						Get in touch
					</p>
				</Link>
			</motion.div>
		</header>
	);
}

export default Header;
