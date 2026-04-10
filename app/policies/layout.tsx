import type { ReactNode } from "react";

import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Company Policies",
  description:
    "Learn about Imperium Linguistics' professional standards, confidentiality approach, and service expectations for clients in South Africa.",
  path: "/policies",
});

export default function PoliciesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
