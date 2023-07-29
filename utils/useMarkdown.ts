import { marked } from "marked";

export function renderMarkdown(markdownText: string) {
  const html = marked(markdownText);
  return { __html: html };
}