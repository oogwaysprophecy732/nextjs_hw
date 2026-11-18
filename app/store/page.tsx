import PageFrame from "../components/PageFrame";
import { StoreSection } from "../components/HomeworkComponents";

export const metadata = { title: "Store | Field Notes" };

export default function StorePage() {
  return <PageFrame><div className="route-intro"><a href="/" className="back-link">← All pages</a></div><StoreSection /></PageFrame>;
}
