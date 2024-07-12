"use client";

import { EditorProvider } from "@/hooks/use-editor";
import { Theme } from "@radix-ui/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme id="radix-theme-root" appearance="dark">
      <EditorProvider>{children}</EditorProvider>
    </Theme>
  );
}
