import type { ReactNode } from "react";

export default function PageFrame({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
