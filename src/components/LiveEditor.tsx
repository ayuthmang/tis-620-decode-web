"use client";

import { useEditor } from "@/hooks/use-editor";
import { useTis620 } from "@/hooks/use-tis-620";
import * as Label from "@radix-ui/react-label";
import { Flex, Container, Box, TextArea } from "@radix-ui/themes";
import React from "react";

export function LiveEditor() {
  const { tis620ToUtf8, utf8ToTis620 } = useTis620();
  const { input, output, setInput, setOutput } = useEditor();

  console.log({ input, output });
  function handleOnInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputVal = e.target.value;
    setInput(inputVal);
    setOutput(tis620ToUtf8(inputVal));
  }

  function handleOnOutputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputVal = e.target.value;
    console.log("e.target.value", e.target.value);
    setOutput(inputVal);
    setInput(utf8ToTis620(inputVal));
  }

  return (
    <Flex display="flex" align="stretch" height="100%">
      <Container size="4" p="4" height="100%">
        <Box asChild height={"100%"}>
          <form>
            <Flex gap="4" direction="row" height="100%">
              <Flex direction="column" gap="2" flexGrow={"1"}>
                <Label.Root htmlFor="input">TIS-620 Input</Label.Root>
                <TextArea
                  id="input"
                  name="input"
                  placeholder="Example: ÊÇÑÊ´Õ"
                  value={input}
                  onChange={handleOnInputChange}
                  spellCheck={false}
                  autoFocus
                />
              </Flex>
              <Flex direction="column" gap="2" flexGrow={"1"}>
                <Label.Root htmlFor="output">UTF-8 Output</Label.Root>
                <TextArea
                  id="output"
                  name="output"
                  placeholder="สวัสดี"
                  value={output}
                  onChange={handleOnOutputChange}
                  spellCheck={false}
                />
              </Flex>
            </Flex>
          </form>
        </Box>
      </Container>
    </Flex>
  );
}
