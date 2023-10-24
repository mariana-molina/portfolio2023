import { Social } from '@/typings';
import getBasePath from './getBasePath';

export const fetchSocials = async () => {
	const res = await fetch(`${getBasePath()}/api/getSocials`);

	const data = await res.json();
	const socials: Social[] = data.socials;
	return socials;
};
