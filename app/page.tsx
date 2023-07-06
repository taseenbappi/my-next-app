import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">This is home</main>
      <Link href="/about">Go to About</Link>
    </>
  );
}
