import Link from "@/components/Link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Header({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <MaxWidthWrapper>
        <div className="flex flex-row py-4">
          <Link className="text-decoration-line font-extrabold" href="/">
            Home
          </Link>
          <div className="flex-grow" />
          <Link
            href="https://github.com/ayuthmang/tis-620-decode-web"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
