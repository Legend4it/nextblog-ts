
import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import Layout from "@/components/layout";




export default async function Blog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <ul className="mt-4">
          {posts.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
            <li key={post.id} className="mt-2">
              <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}


