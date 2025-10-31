import React from "react";
import * as RadixLink from "@radix-ui/themes";
import NextLink from "next/link";

type LinkProps = RadixLink.LinkProps & {
  href: URL | string; // for compatible with NextLink props
};

export default function Link(props: LinkProps) {
  const { href, children } = props;

  return (
    <RadixLink.Link asChild {...props}>
      <NextLink href={href}>{children}</NextLink>
    </RadixLink.Link>
  );
}
