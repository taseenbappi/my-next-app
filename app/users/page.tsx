import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metaData: Metadata = {
  title: "Users",
};

const Users = async () => {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;
  const content = (
    <section>
      <Link href={"/"}>Home</Link>
      <br />
      {users.map((user) => {
        return (
          <>
            <h5 key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </h5>
          </>
        );
      })}
    </section>
  );
  return content;
};

export default Users;
