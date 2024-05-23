"use client";
import {
  Flex,
  Text,
  Button,
  ThemePanel,
  Grid,
  TextArea,
  Box,
  TextAreaProps,
} from "@radix-ui/themes";
import { useFormik, Field, Form, Formik, FormikValues } from "formik";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { z } from "zod";
import { useTis620 } from "@/hooks/use-tis-620";
import { toFormikValidationSchema } from "zod-formik-adapter";
import iconv from "iconv-lite";
import { css } from "@emotion/css";
import * as Label from "@radix-ui/react-label";

const textAreaStyle = css`
  height: 100%;
`;
console.log({ textAreaStyle });

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

  function handleSubmit(values: EditorValues) {
    console.log(values);
  }

  function handleOnInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log("handleOnInputChange");
    const unicodeOutput = iconv.decode(
      Buffer.from(e.target.value, "binary"),
      "tis-620"
    );
    formik.setValues({
      input: e.target.value,
      output: unicodeOutput,
    });
    console.log({ unicodeOutput });
  }

  function handleOnOutputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log("handleOnOutputChange");
    const tis620Output = iconv.encode(e.target.value, "tis-620");
    formik.setFieldValue("output", e.target.value);
    formik.setValues({
      input: tis620Output.toString("utf8"),
      output: e.target.value,
    });
  }

  console.log(formik.values);
  return (
    <>
      <header>
        <nav>Nvabar here</nav>
      </header>
      <main>
        <MaxWidthWrapper>

        <Box>
          alkweuj;lakwjef;kl
        </Box>

          <Box height="100%">
            <Formik<EditorValues>
              initialValues={initialEditorValues}
              onSubmit={handleSubmit}>
              <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <Flex
                  display={"flex"}
                  gap={"3"}
                  height={"100%"}
                  width={"100%"}
                  style={{ width: "100%" }}>
                  <Label.Root>
                    TIS-620 Input
                    <TextArea
                      name="input"
                      placeholder="Type here..."
                      onChange={handleOnInputChange}
                      value={formik.values.input}
                    />
                  </Label.Root>

                  <Label.Root>
                    Unicode Output
                    <TextArea
                      name="output"
                      placeholder="Type here..."
                      value={formik.values.output}
                      onChange={handleOnOutputChange}
                    />
                    {/* <Field
                      name="output"
                      component={TextArea}
                      placeholder="Type here..."
                      onChange={handleOnOutputChange}
                      size={2}
                      height={"100%"}
                    /> */}
                  </Label.Root>
                </Flex>

                <Button type="submit" size={"4"}>
                  Convert
                </Button>
              </Form>
            </Formik>
          </Box>
        </MaxWidthWrapper>
      </main>
    </>
  );
}
