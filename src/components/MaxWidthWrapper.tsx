import { Container } from "@radix-ui/themes";
import React from "react";

export default function MaxWidthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container size="4">{children}</Container>;
}
