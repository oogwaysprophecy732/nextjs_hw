import PageFrame from "../components/PageFrame";
import { ProjectSection } from "../components/HomeworkComponents";

export const metadata = { title: "GitHub Project | Field Notes" };

export default function GitHubLinkPage() {
  return <PageFrame><div className="route-intro"><a href="/" className="back-link">← All pages</a></div><ProjectSection /></PageFrame>;
}
