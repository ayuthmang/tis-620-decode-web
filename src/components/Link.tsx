import React from "react";
import * as RadixLink from "@radix-ui/themes";
import NextLink from "next/link";

// type LinkProps that bring type from RadixLink
type LinkProps = RadixLink.LinkProps;

export default function Link(props: LinkProps) {
  const { href, children } = props;

  return (
    <NextLink href={href} passHref>
      <RadixLink.Link {...props}>{children}</RadixLink.Link>
    </NextLink>
  );
}
