"use client";

import styled from "@emotion/styled";
import { Container, Flex } from "@radix-ui/themes";
import Link from "@/components/Link";
import { GitHubIcon } from "./Icons";
import { remToPx } from "@/utils/pixel-to-rem";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Header() {
  return (
    <MaxWidthWrapper>
      <nav className="p-4">
        <div className="flex flex-row">
          <Filler />
          <Link
            href="https://github.com/ayuthmang/tis-620-decode-web"
            className="flex flex-row gap-4 bg-yellow-400"
          >
            <GitHubIcon width={remToPx(2)} height={remToPx(2)} />
            <span className="inline-block">GitHub</span>
          </Link>
        </div>
      </nav>
    </MaxWidthWrapper>
  );
}

function Filler() {
  return <div className="flex-grow" />;
}
