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
		<div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center mb-40">
			<h3 className="mainTitles">Contact</h3>
			<div className="mt-28 md:mt-32 flex flex-col space-y-4">
				<h4 className="semibold text-2xl xl:text-4xl text-center">
					{`I've got just what you need`}
					<br />
					<span className="decoration-[#F7AB0A] underline">{`Let's talk.`}</span>
				</h4>

				<div className="space-y-4">
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
						<ToastContainer style={{ width: '150px' }} />
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
								className="contactInput w-[145px] md:w-[220px] xl:w-[300px]"
							/>
							<input
								{...register('email')}
								placeholder="Email"
								type="email"
								className="contactInput w-[145px] md:w-[220px] xl:w-[300px]"
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
							className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
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
