import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

// process.cwd() during Astro build = site/ directory
const CONTENT_BASE = path.join(process.cwd(), '..', 'content', 'modules');

export function readMarkdownFile(relPath: string): string {
  const fullPath = path.join(CONTENT_BASE, relPath);
  try {
    return fs.readFileSync(fullPath, 'utf-8');
  } catch {
    const filename = path.basename(relPath);
    return `_Contenu non disponible — ${filename}_`;
  }
}

export function toHtml(markdown: string): string {
  const result = marked.parse(markdown);
  return typeof result === 'string' ? result : '';
}
