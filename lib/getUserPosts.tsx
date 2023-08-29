const getUserPosts = async (userId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      next: {
        revalidate: 60, //hold data for 60 sec
      },
    }
  );
  if (!response.ok) throw new Error("Something went wrong");
  return response.json();
};

export default getUserPosts;
