
import notFound from "@/not-found";
import Layout from "@/layout";


interface Post {
  id: number;
  title: string;
  body: string;
}
type Params = {
  params: {
    id: string;
  };
};


export default async function BlogPost({ params }: Params) {

  const { id } = await params;
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return notFound();
  }

  const post: Post = await res.json();

  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {post.body}
          </p>
        </article>
      </div>
    </Layout>
  );
}

