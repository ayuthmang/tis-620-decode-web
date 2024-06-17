"use client";
import { Flex, Container, Box } from "@radix-ui/themes";
import { useTis620 } from "@/hooks/use-tis-620";
import * as Label from "@radix-ui/react-label";
import Header from "@/components/Header";
import TextArea from "@/components/TextArea";
import Footer from "@/components/Footer";
import React from "react";
import { useFormState } from "react-dom";

function useTextArea() {
  const [value, setValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return { value, handleChange };
}

export default function Home() {
  const { tis620ToUtf8, utf8ToTis620 } = useTis620();
  const inputTextArea = useTextArea();
  const outputTextArea = useTextArea();

  function handleOnInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputVal = e.target.value;
    // formik.setValues({
    //   input: inputVal,
    //   output: tis620ToUtf8(inputVal),
    // });
  }

  function handleOnOutputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputVal = e.target.value;
    formik.setValues({
      input: utf8ToTis620(inputVal),
      output: inputVal,
    });
  }

  return (
    <>
      <Header />
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
                    onChange={inputTextArea.handleChange}
                    value={inputTextArea.value}
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
                    onChange={outputTextArea.handleChange}
                    value={outputTextArea.value}
                    spellCheck={false}
                  />
                </Flex>
              </Flex>
            </form>
          </Box>
        </Container>
      </Flex>
      <Footer />
    </>
  );
}
