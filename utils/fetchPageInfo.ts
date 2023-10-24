import { PageInfo } from '@/typings';
import getBasePath from './getBasePath';

export const fetchPageInfo = async () => {
	const res = await fetch(`${getBasePath()}/api/getPageInfo`);

	const data = await res.json();
	const pageInfo: PageInfo = data.pageInfo;
	return pageInfo;
};
