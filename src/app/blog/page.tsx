
import Link from "next/link";
import Layout from "@/layout";

type Post = {
  id: number;
  title: string;
};

export default async function Blog() {

  await new Promise((r) => setTimeout(r, 2000)); // Just to simulate a slow connection
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

