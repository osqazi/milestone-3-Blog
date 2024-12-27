import Link from "next/link";
import GetBlogs from "./components/GetBlogss";


export default async function Home() {
  const blogs = await GetBlogs();

  return (
    <main className="container mx-auto p-4 flex">
      <aside className="w-1/4 bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-4">Popular Blogs</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="mb-2">
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <section className="w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-4">Latest Blogs</h1>
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-6 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.author} - {blog.date}</p>
            <p className="mt-2">{blog.excerpt}</p>
            <Link href={`/blogs/${blog.id}`} className="text-blue-500">Read more</Link>
          </div>
        ))}
      </section>
    </main>
  );
}

