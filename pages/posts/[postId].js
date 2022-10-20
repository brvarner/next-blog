import { PageContainer } from "../../containers";
import getPost from "../../lib/helper";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import Head from "next/head";
import data from "../api/posts/data";

// We use the SWRConfig to cache the data
export default function Page() {
  const router = useRouter();
  const { postId } = router.query;
  const postData = data.Posts.find((post) => post.id === postId);

  return (
    <>
      <Head>
        <title>Design</title>
      </Head>
      <SWRConfig>
        <Article {...postData} />
      </SWRConfig>
    </>
  );
}

function Article({ title, subtitle, image, content }) {
  return (
    <PageContainer
      title={title}
      description={subtitle}
      content={content}
      image={image}
    />
  );
}

// Get static paths is necessary for paths with queries, so that Next.js
// knows what it's going to render when that query is called.
// i.e. blog/1 lets Next.js to grab the first one.
// export async function getStaticPaths() {
//   const posts = await getPost();

//   const paths = posts.map((post) => {
//     return {
//       params: {
//         postId: post.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
