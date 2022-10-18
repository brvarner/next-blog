export default async function getPost(id) {
  const res = await fetch("https://next-blog-delta-woad.vercel.app//api/posts");
  const posts = JSON.parse(res.json());

  if (id) {
    return posts.find((value) => value.id == id);
  }

  return posts;
}
