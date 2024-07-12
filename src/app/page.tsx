import { LiveEditor } from "@/components/LiveEditor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TIS-620 Decode Online",
  description: "Decode TIS-620 to UTF-8 online",
};

export default function Home() {
  return (
    <>
      <LiveEditor />
    </>
  );
}
