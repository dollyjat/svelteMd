import { getMd } from '$lib';
import type { PageServerLoad } from './$types';

export const load = (async () => {
   const mdText = await getMd()
   return {
      mdText
   };
}) satisfies PageServerLoad;