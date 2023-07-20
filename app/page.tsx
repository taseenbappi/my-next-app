import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">This is home</main>
      <Link href="/about">Go to About</Link> <br />
      <Link href="/users">Go to User</Link>
    </>
  );
}
