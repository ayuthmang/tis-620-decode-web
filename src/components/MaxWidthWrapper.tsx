import { twMerge } from "tailwind-merge";

export function MaxWidthWrapper({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { className } = props;

  return (
    <div
      className={twMerge("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
