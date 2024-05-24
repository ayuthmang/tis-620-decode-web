import styled from "@emotion/styled";
import { Container, Flex, Link } from "@radix-ui/themes";

export default function Header() {
  return (
    <Nav>
      <Container p="4">
        <Flex align="center" justify={"center"}>
          <Flex flexGrow="1" />
          <Link href="https://github.com/ayuthmagn/tis-620-decode-web">
            GitHub
          </Link>
        </Flex>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 60px;
`;
