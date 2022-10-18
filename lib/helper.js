export default async function getPost(id) {
  const res = await fetch("http://127.0.0.1:3000/api/posts");
  const posts = await res.json();

  if (id) {
    return posts.find((value) => value.id == id);
  }

  return posts;
}
