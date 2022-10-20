import data from "../pages/api/posts/data";

export default async function getPost(id) {
  const posts = data.Posts;
  console.log({ posts });

  if (id) {
    return posts.find((value) => value.id === id);
  }

  return posts;
}
