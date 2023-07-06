import Link from "next/link";
import styles from "./styles.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next | About",
  description: "About",
};

const About = () => {
  return (
    <>
      <main>
        <div className={styles.main}>this is about page</div>
        <Link href="/">Go to home</Link>
      </main>
    </>
  );
};

export default About;
