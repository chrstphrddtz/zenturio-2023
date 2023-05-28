import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/login"}>Go to Login</Link>
      <Link href={"/dashboard"}>Go to Dashboard</Link>
    </main>
  );
}
