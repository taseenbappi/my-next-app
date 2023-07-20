import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import Link from "next/link";
import React from "react";
type Params = {
  params: {
    userId: string;
  };
};

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  const [user, userPosts] = await Promise.all([userData, userPostsData]);
  return (
    <>
      <h1>{user.name}</h1>
      <br />
      <p>
        {userPosts.map((post) => {
          return <p key={post.id}>Title: {post.title}</p>;
        })}
      </p>
      <Link href="/users">Back</Link>
    </>
  );
};

export default UserPage;
