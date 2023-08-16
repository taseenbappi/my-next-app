import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <main className="">This is home</main>
      <Link href="/about">Go to About</Link> <br />
      <Link href="/users">Go to User</Link>
    </>
  );
}
