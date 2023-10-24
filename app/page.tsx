import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { sanityClient } from '../sanity';
import { groq } from 'next-sanity';
import { PageInfo, Project, Skill, Social } from '@/typings';

export const revalidate = 10;

const skillsQuery = groq`*[_type == "skills"]`;
const pageInfoQuery = groq`*[_type == "pageInfo"][0]`;
const socialsQuery = groq`*[_type == "social"]`;
const projectQuery = groq`
  *[_type == "project"] {
  ..., technologies[]->
}
`;

export default async function Home() {
	const socials: Social[] = await sanityClient.fetch(socialsQuery);
	const pageInfo: PageInfo = await await sanityClient.fetch(pageInfoQuery);
	const skills: Skill[] = await sanityClient.fetch(skillsQuery);
	const projects: Project[] = await sanityClient.fetch(projectQuery);

	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory snap-always overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Header socials={socials} />
			<section id="hero" className="snap-center">
				<Hero pageInfo={pageInfo} />
			</section>
			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>
			<section id="skills" className="snap-center">
				<Skills skills={skills} />
			</section>
			<section id="projects" className="snap-center">
				<Projects projects={projects} />
			</section>
			<section id="contact" className="snap-center ">
				<ContactMe />
			</section>
		</div>
	);
}
