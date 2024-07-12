"use client";

import { useEditor } from "@/hooks/use-editor";
import { useTIS620 } from "@/hooks/use-tis-620";
import * as Label from "@radix-ui/react-label";
import { TextArea } from "@radix-ui/themes";
import React from "react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export function LiveEditor() {
  const { tis620ToUtf8, utf8ToTis620 } = useTIS620();
  const { input, output, setInput, setOutput } = useEditor();

  function handleOnInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputVal = e.target.value;
    setInput(inputVal);
    setOutput(tis620ToUtf8(inputVal));
  }

  function handleOnOutputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputVal = e.target.value;
    setOutput(inputVal);
    setInput(utf8ToTis620(inputVal));
  }

  return (
    <MaxWidthWrapper className="h-full p-4">
      <div className="flex h-full flex-1 flex-row gap-4">
        <div className="flex flex-1 flex-col gap-2">
          <Label.Root htmlFor="input">TIS-620 Input</Label.Root>
          <TextArea
            id="input"
            name="input"
            placeholder="Example: ÊÇÑÊ´Õ"
            value={input}
            onChange={handleOnInputChange}
            spellCheck={false}
            autoFocus
            className="h-full"

          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Label.Root htmlFor="output">UTF-8 Output</Label.Root>
          <TextArea
            id="output"
            name="output"
            placeholder="สวัสดี"
            value={output}
            onChange={handleOnOutputChange}
            spellCheck={false}
            className="h-full"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
