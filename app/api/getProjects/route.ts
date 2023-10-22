import { groq } from 'next-sanity';
import { sanityClient } from '@/sanity';
import { Project } from '@/typings';
import { NextResponse } from 'next/server';

const query = groq`
  *[_type == "project"] {
  ..., technologies[]->
}
`;

export async function GET(req: Request) {
	const projects: Project[] = await sanityClient.fetch(query);
	return NextResponse.json({ projects });
}
