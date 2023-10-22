import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '@/utils/fetchSocials';

export const revalidate = 10;

export default async function Home() {
	const socials = await fetchSocials();
	const pageInfo = await fetchPageInfo();
	const skills = await fetchSkills();
	// const projects = fetchProjects();
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Header socials={socials} />
			<section id="hero" className="snap-center">
				<Hero pageInfo={pageInfo} />
			</section>
			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>
			{/* <section id="#experience" className="snap-center">
				<WorkExperience />
			</section> */}
			<section id="skills" className="snap-center">
				<Skills skills={skills} />
			</section>
			<section id="projects" className="snap-center">
				<Projects />
			</section>
			<section id="contact" className="snap-center ">
				<ContactMe />
			</section>
		</div>
	);
}
