import PageFrame from "../components/PageFrame";
import { CounterSection } from "../components/HomeworkComponents";

export const metadata = { title: "Counter | Field Notes" };

export default function CountPage() {
  return <PageFrame><div className="route-intro"><a href="/" className="back-link">← All pages</a></div><CounterSection /></PageFrame>;
}
