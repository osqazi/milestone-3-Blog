import { notFound } from "next/navigation";
import GetBlog from "@/app/components/GetBlogg";
import GetBlogs from "@/app/components/GetBlogss";

export default async function Blog({params}) {
  const blog = await GetBlog(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="container mx-auto p-4">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
        <p className="text-gray-600">By {blog.author} on {blog.date}</p>
        <img src={blog.image} alt={blog.title} className="w-full h-auto rounded my-4" />
        <p className="mt-4">{blog.content}</p>
        <div className="mt-4 flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Like</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Dislike</button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded">Share to Facebook</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Share to WhatsApp</button>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <form className="mb-6">
          <textarea placeholder="Write your comment..." className="w-full p-4 border rounded mb-4" rows="4"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
        </form>
        <ul className="space-y-4">
          {blog.comments.map((comment, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded">
              <p className="text-gray-800 font-bold">{comment.name}</p>
              <p className="text-gray-600 text-sm">{comment.date}</p>
              <p className="mt-2">{comment.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const blogs = await GetBlogs();
  return blogs.map((blog) => ({ id: blog.id }));
}
