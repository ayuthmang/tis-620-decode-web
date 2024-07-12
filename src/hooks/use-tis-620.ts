import iconv from "iconv-lite";

export function useTIS620() {
  function utf8ToTis620(utf8: string) {
    return iconv.encode(utf8, "tis-620").toString("binary");
  }

  function tis620ToUtf8(tis620: string) {
    return iconv.decode(Buffer.from(tis620, "binary"), "tis-620");
  }

  return { utf8ToTis620, tis620ToUtf8 };
}
