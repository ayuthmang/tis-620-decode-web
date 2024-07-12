import { renderHook } from "@testing-library/react";
import { useTIS620 } from "../use-tis-620";

describe("useTis620", () => {
  it("should return correct value", () => {
    const { result } = renderHook(() => useTIS620());
    expect(result.current.tis620ToUtf8("ÊÇÑÊ´Õ")).toBe("สวัสดี");
    expect(result.current.utf8ToTis620("สวัสดี")).toBe("ÊÇÑÊ´Õ");
  });
});
