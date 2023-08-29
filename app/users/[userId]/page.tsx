import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import Link from "next/link";
import React, { Suspense } from "react";
import UserPost from "./Components/page";
import type { Metadata } from "next";
type Params = {
  params: {
    userId: string;
  };
};

//Static metadata
// export const metadata: Metadata = {
//   title: "User Posts",
// };

// dynamic metadata func
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;
  return {
    title: user.name,
    description: "This is user name",
  };
}

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  const user = await userData;
  // const [user, userPosts] = await Promise.all([userData, userPostsData]);
  return (
    <>
      <h1>{user.name}</h1>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPost promise={userPostsData} />
      </Suspense>
      <Link href="/users">Back</Link>
    </>
  );
};

export default UserPage;
