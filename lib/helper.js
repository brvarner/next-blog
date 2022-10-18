export default async function getPost(id) {
  const res = await fetch("https://next-blog-delta-woad.vercel.app//api/posts");
  const posts = await JSON.stringify(res.data);

  if (id) {
    return posts.find((value) => value.id == id);
  }

  return posts;
}
