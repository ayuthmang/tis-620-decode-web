import { Text } from "@radix-ui/themes";
import { twMerge } from "tailwind-merge";

export default function Footer({ className }: { className?: string }) {
  return (
    <div className={twMerge("flex items-center justify-center p-4", className)}>
      <Text>Made with ❤️ by @ayuthmang</Text>
    </div>
  );
}
