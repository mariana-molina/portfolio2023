import { Project } from '@/typings';
import getBasePath from './getBasePath';

export const fetchProjects = async () => {
	const res = await fetch(`${getBasePath()}/api/getProjects`);

	const data = await res.json();
	const projects: Project[] = data.projects;

	return projects;
};
