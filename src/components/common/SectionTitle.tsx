import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SectionTitle = ({ children }: Readonly<{ children: string }>) => {
  return (
    <div className=" text-center w-full   flex justify-center items-center top-20 uppercase tracking-[4px] text-gray-500 text-2xl">
      {/* {children} */}
      <Link
        href="https://github.com/Hardik849`"
        target="_blank"
        className="border relative border-white/[0.2] text-white hover:text-[var(--primaryColor)] px-4 py-2 rounded-full"
      >
        <span className="hidden sm:block">{children}</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[var(--primaryColor)] to-transparent  h-px" />
      </Link>
    </div>
  );
};

export default SectionTitle;
