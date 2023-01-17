import fs from "fs";
import path from "path";
import Link from "next/link";
import { marked } from "marked";

const Post = ({ content }) => (
  <>
    <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    <Link href="/">← Back to home</Link>
  </>
);

export default Post;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((file) => {
    return {
      params: {
        post: file,
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { post } }) {
  const content = fs.readFileSync(path.join("posts", post), "utf-8");

  return { props: { content } };
}
