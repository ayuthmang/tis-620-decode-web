"use client";

import Link from "@/components/Link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Header() {
  return (
    <nav
      className="p-4"
      style={{
        height: "var(--header-height)",
      }}
    >
      <MaxWidthWrapper>
        <div className="flex flex-row">
          <div className="flex-grow" />
          <Link
            href="https://github.com/ayuthmang/tis-620-decode-web"
            className="flex flex-row gap-4"
          >
            <span className="inline-block">GitHub</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
