"use client";

import styled from "@emotion/styled";
import { Container, Flex } from "@radix-ui/themes";
// import { Container, Flex, Link } from "@radix-ui/themes";
import Link from "@/components/Link";
import { GitHubIcon } from "./Icons";
import { remToPx } from "@/utils/pixel-to-rem";

export default function Header() {
  return (
    <Nav>
      <Container p="4">
        <Flex align="center" justify="center">
          <Flex
            flexGrow="1"
            direction={"column"}
            justify={"center"}
            align={"center"}
          />
          <Link href="https://github.com/ayuthmang/tis-620-decode-web" color="amber">
            <Flex gapX={"4"}>
              <GitHubIcon width={remToPx(2)} height={remToPx(2)} />
              GitHub
            </Flex>
          </Link>
        </Flex>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  height: var(--header-height);
`;
