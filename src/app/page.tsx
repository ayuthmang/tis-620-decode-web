"use client";
import {
  Flex, Container,
  Box
} from "@radix-ui/themes";
import { useFormik, Form, Formik } from "formik";
import { z } from "zod";
import { useTis620 } from "@/hooks/use-tis-620";
import { toFormikValidationSchema } from "zod-formik-adapter";
import * as Label from "@radix-ui/react-label";
import Header from "@/components/Header";
import TextArea from "@/components/TextArea";
import Footer from "@/components/Footer";

const EditorSchema = z.object({
  input: z.string(),
  output: z.string(),
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
      <Header />
      <Flex display="flex" align="stretch" height="100%">
        <Container size="4" p="4" height="100%">
          <Formik<EditorValues>
            initialValues={initialEditorValues}
            onSubmit={handleSubmit}
          >
            <Box asChild height={"100%"}>
              <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <Flex gap="4" direction="row" height="100%">
                  <Flex direction="column" gap="2" flexGrow={"1"}>
                    <Label.Root htmlFor="input">TIS-620 Input</Label.Root>
                    <TextArea
                      id="input"
                      name="input"
                      placeholder="Type here..."
                      onChange={handleOnInputChange}
                      value={formik.values.input}
                      spellCheck={false}
                      autoFocus
                    />
                  </Flex>
                  <Flex direction="column" gap="2" flexGrow={"1"}>
                    <Label.Root htmlFor="output">UTF-8 Output</Label.Root>
                    <TextArea
                      id="output"
                      name="output"
                      placeholder="Type here..."
                      onChange={handleOnOutputChange}
                      value={formik.values.output}
                      spellCheck={false}
                    />
                  </Flex>
                </Flex>
              </Form>
            </Box>
          </Formik>
        </Container>
      </Flex>
      <Footer />
    </>
  );
}
