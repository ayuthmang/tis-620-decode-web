"use client";

import Link from "@/components/Link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Header({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <MaxWidthWrapper>
        <div className="flex flex-row py-4">
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
