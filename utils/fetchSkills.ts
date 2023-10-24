import { Skill } from '@/typings';
import getBasePath from './getBasePath';

export const fetchSkills = async () => {
	const res = await fetch(`${getBasePath()}/api/getSkills`);

	const data = await res.json();
	const skills: Skill[] = data.skills;

	return skills;
};
