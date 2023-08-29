type Props = {
  promise: Promise<Post[]>;
};
const UserPost = async ({ promise }: Props) => {
  const userPosts = await promise;
  const content = userPosts?.map((item) => {
    return (
      <article key={item.id} className="text-left me-auto bg-sky-500/100 m-1">
        <h2>Title:{item.title}</h2>
        <p>Post: {item.body.slice(0, 25)}</p>
        <br />
      </article>
    );
  });
  return content;
};
export default UserPost;
