'use client';
import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

function ContactMe() {
	const notify = () =>
		toast('Copied!', {
			containerId: 'A',
			toastId: 'alkjsdbak1',
			autoClose: 500,
			hideProgressBar: true,
			position: 'bottom-center',
			draggable: false,
			theme: 'dark',
			pauseOnFocusLoss: false,
			pauseOnHover: false,
			transition: Slide,
		});

	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = formData => {
		window.location.href = `mailto:marsmolina20@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. (${formData.email})`;
	};

	return (
		<div className="h-screen flex flex-col justify-evenly items-center md:pt-[5%] lg:pt-0">
			<h3 className="uppercase tracking-[20px] text-gray-500 text-2xl lg:text-3xl">
				Contact
			</h3>
			<div className="flex flex-col space-y-10 md:space-y-6 lg:space-y-10 ">
				<div className="semibold text-2xl lg:text-4xl text-center flex flex-col md:flex-row">
					<h4>{`I've got just what you need.`}</h4>
					<span className="decoration-[#F7AB0A] underline md:indent-1">{`Let's talk.`}</span>
				</div>

				<div className="space-y-4 lg:space-y-9">
					<div className="flex items-center justify-center space-x-5">
						<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-xl">+46 723616023</p>
					</div>
					<div
						className="flex items-center justify-center space-x-5 cursor-pointer relative"
						onClick={() => {
							navigator.clipboard.writeText('marsmolina20@gmail.com');
							notify();
						}}
					>
						<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
						<p className="text-xl hover:text-[#F7AB0A]">
							marsmolina20@gmail.com
						</p>
						<ToastContainer
							enableMultiContainer
							containerId={'A'}
							style={{ width: '150px' }}
						/>
					</div>
					<div className="flex items-center justify-center space-x-5">
						<MapPinIcon className="text-[#F7AB0A] h-9 w-9 md:h-7 md:w-7 animate-pulse" />
						<p className="text-xl">Smedbacksgatan 18, Stockholm</p>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col space-y-2 w-fit mx-auto"
					>
						<div className="flex space-x-2">
							<input
								{...register('name')}
								placeholder="Name"
								type="text"
								className="contactInput w-[145px] md:w-[220px] lg:w-[300px]"
							/>
							<input
								{...register('email')}
								placeholder="Email"
								type="email"
								className="contactInput w-[145px] md:w-[220px] lg:w-[300px]"
							/>
						</div>
						<input
							{...register('subject')}
							placeholder="Subject"
							type="text"
							className="contactInput"
						/>
						<textarea
							{...register('message')}
							placeholder="Message"
							className="contactInput"
						/>
						<button
							type="submit"
							className="bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold text-lg"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ContactMe;
