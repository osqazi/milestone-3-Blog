import { notFound } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";
import BlogData from "@/app/components/data/Blogdata";
import Image from "next/image";

export default async function Blog({ params }) {
  // Extract the id from params correctly
  const blogId = parseInt(params.id);  // params is an object containing the id

  const blog = BlogData.find((blogg) => blogg.id === blogId);
  console.log(blog?.id);

  if (!blog) {
    notFound();  // If no blog is found, show a "not found" page
  }

  return (
    <main className="container mx-auto p-4">
      <div className="flex space-x-3">
        <Sidebar />
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
          <p className="text-gray-600">By {blog.author} on {blog.date}</p>
          <Image src={blog.pic} alt={blog.title} width={1000} height={100}/>
          <p className="mt-4">{blog.content.introduction}</p>
          <div className="mt-4 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Like</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Dislike</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded">Share to Facebook</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Share to WhatsApp</button>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <form className="mb-6">
          <textarea placeholder="Write your comment..." className="w-full p-4 border rounded mb-4" rows={4}></textarea>
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

