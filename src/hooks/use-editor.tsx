import React from "react";

type InitialState = {
  input: string;
  output: string;
  setInput: (input: string) => void;
  setOutput: (output: string) => void;
};

const initialState: InitialState = {
  input: "",
  output: "",
  setInput: () => {},
  setOutput: () => {},
};

export const EditorContext = React.createContext(initialState);

export const useEditor = () => {
  return React.useContext(EditorContext);
};

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  return (
    <EditorContext.Provider value={{ input, setInput, output, setOutput }}>
      {children}
    </EditorContext.Provider>
  );
};
