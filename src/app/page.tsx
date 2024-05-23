"use client";
import {
  Flex,
  Button,
  TextArea,
  Section,
  Container,
  Box,
} from "@radix-ui/themes";
import { useFormik, Form, Formik } from "formik";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { z } from "zod";
import { useTis620 } from "@/hooks/use-tis-620";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { css } from "@emotion/css";
import * as Label from "@radix-ui/react-label";
import styled from "@emotion/styled";

const textAreaStyle = css`
  height: 100%;
`;

// zod validation schema
const EditorSchema = z.object({
  input: z.string().optional(),
  output: z.string().optional(),
});

type EditorValues = z.infer<typeof EditorSchema>;

const initialEditorValues: EditorValues = {
  input: "",
  output: "",
};

export default function Home() {
  const formik = useFormik<EditorValues>({
    validationSchema: toFormikValidationSchema(EditorSchema),
    initialValues: initialEditorValues,
    onSubmit: handleSubmit,
  });
  const { tis620ToUtf8, utf8ToTis620 } = useTis620();

  function handleSubmit(values: EditorValues) {
    console.log(values);
  }

  function handleOnInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const inputVal = e.target.value;
    formik.setValues({
      input: inputVal,
      output: tis620ToUtf8(inputVal),
    });
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
      <header>
        <nav>Nvabar here</nav>
      </header>
      <Box height={"100%"}>
        <MaxWidthWrapper>
          <Section>
            <Container>
              <Formik<EditorValues>
                initialValues={initialEditorValues}
                onSubmit={handleSubmit}>
                <Form
                  onSubmit={formik.handleSubmit}
                  onReset={formik.handleReset}>
                  <Flex gap={"6"}>
                    <Box flexGrow={"1"} flexShrink={"1"} flexBasis={"0"}>
                      <InputGroup>
                        <Label.Root htmlFor="input">TIS-620 Input</Label.Root>
                        <TextAreaStyled
                          id="input"
                          className={textAreaStyle}
                          name="input"
                          placeholder="Type here..."
                          onChange={handleOnInputChange}
                          value={formik.values.input}
                        />
                      </InputGroup>
                    </Box>

                    <Box
                      flexGrow={"1"}
                      flexShrink={"1"}
                      flexBasis={"0"}
                      height={"100%"}>
                      <InputGroup>
                        <Label.Root htmlFor="output">Unicode Output</Label.Root>

                        <TextAreaStyled
                          id="output"
                          className={textAreaStyle}
                          name="output"
                          placeholder="Type here..."
                          value={formik.values.output}
                          onChange={handleOnOutputChange}
                        />
                      </InputGroup>
                    </Box>
                  </Flex>

                  <Button type="submit">Convert</Button>
                </Form>
              </Formik>
            </Container>
          </Section>
        </MaxWidthWrapper>
      </Box>
    </>
  );
}

const InputGroup = ({ children }: { children: React.ReactNode }) => (
  <Flex direction={"column"}>{children}</Flex>
);

const TextAreaStyled = styled(TextArea)`
  height: 100%;
`;
