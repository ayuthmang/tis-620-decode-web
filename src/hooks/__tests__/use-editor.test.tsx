import { renderHook, act } from "@testing-library/react";
import { useEditor } from "../use-editor";

describe("useEditor", () => {
  test("should initialize with empty input and output", () => {
    const { result } = renderHook(() => useEditor());

    expect(result.current.input).toBe("");
    expect(result.current.output).toBe("");
  });

  test("should update input value", () => {
    const { result } = renderHook(() => useEditor());

    act(() => {
      result.current.setInput("Hello, World!");
    });

    expect(result.current.input).toBe("Hello, World!");
  });

  test("should update output value", () => {
    const { result } = renderHook(() => useEditor());

    act(() => {
      result.current.setOutput("Hello, World!");
    });

    expect(result.current.output).toBe("Hello, World!");
  });
});
