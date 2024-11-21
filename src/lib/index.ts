import fs from 'fs';

async function getMd() {
   const md = await fs.promises.readFile('src/lib/post.md', 'utf-8');
   return md
}

export { getMd }