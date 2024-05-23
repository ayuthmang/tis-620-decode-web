// hooks function that accept string and return string in tis-620 encoding
// with encode and decode functionality
// note: performance optimized

export function useTis620() {
  const encode = (input: string) => {
    const encoder = new TextEncoder();
    const view = encoder.encode(input);
    return new TextDecoder("windows-874").decode(view);
  };

  const decode = (input: string) => {
    const encoder = new TextEncoder();
    const view = encoder.encode(input);
    return new TextDecoder("utf-8").decode(view);
  };

  return { encode, decode };
}
