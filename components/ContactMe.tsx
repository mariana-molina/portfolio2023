'use client';
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

function ContactMe({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = formData => {
		window.location.href = `mailto:marsmolina20@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. (${formData.email})`;
	};

	return (
		<div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>
			<div className="absolute top-44 flex flex-col space-y-8 mx-12 xl:absolute xl:top-40">
				<h4 className="semibold text-2xl xl:text-4xl text-center">
					{`I've got just what you need`}
					<br />
					<span className="decoration-[#F7AB0A] underline">{`Let's talk.`}</span>
				</h4>

				<div className="space-y-8">
					<div className="flex items-center justify-center space-x-5">
						<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-xl">+46 723616023</p>
					</div>
					<div className="flex items-center justify-center space-x-5">
						<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-xl">marsmolina20@gmail.com</p>
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
