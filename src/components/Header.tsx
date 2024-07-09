"use client";

import Link from "@/components/Link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { twMerge } from "tailwind-merge";

export default function Header({ className }: { className?: string }) {
  return (
    <nav
      className={twMerge("p-4", className)}
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
