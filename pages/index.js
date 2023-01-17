import fs from "fs";
import path from "path";
import Link from "next/link";

const Home = ({ files }) => (
  <ul>
    {files.map((file) => (
      <li key={file}>
        <Link href={`/posts/${file}`}>{file}</Link>
      </li>
    ))}
  </ul>
);

export default Home;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  return { props: { files } };
}
