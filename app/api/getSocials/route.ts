import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Social } from '@/typings';
import { NextResponse } from 'next/server';

const query = groq`*[_type == "social"]`;

export async function GET(req: Request) {
	const socials: Social[] = await sanityClient.fetch(query);
	return NextResponse.json({ socials });
}
