import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Experience } from '@/typings';
import { NextResponse } from 'next/server';

const query = groq`
  *[_type == "experience"] {
  ..., technologies[]->
}
`;
export async function GET(req: Request) {
	const experiences: Experience[] = await sanityClient.fetch(query);
	return NextResponse.json({ experiences });
}
