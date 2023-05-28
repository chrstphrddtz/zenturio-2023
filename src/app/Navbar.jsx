import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-primary fixed top-0 z-10 w-full mx-auto my-0">
      <nav className="flex items-center justify-between flex-row list-none bg-primary text-var(--secondaryColor) h-12 p-5">
        <Link href={"/"} className="text-3xl font-medium tracking-0.2rem">
          zentur.io
        </Link>
        <Link href={"/login"} className="text-3xl font-medium tracking-0.2rem">
          login
        </Link>
      </nav>
    </header>
  );
}
