import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";

export const markdownToComponent = (markdown: string) => {
  return <Markdown remarkPlugins={[remarkGfm, remarkRehype]}>{markdown}</Markdown>;
};
