"use client"
import { notFound } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";
import BlogData from "@/app/components/data/Blogdata";
import Image from "next/image";

interface BlogParams {
  id: string;  // The ID is expected to be a string in the params
}

interface Comment {
  name: string;
  date: string;
  content: string;
}

interface BlogContent {
  [key: string]: string | string[]; // Handles content that can be either a string or an array of strings
}

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  pic: string;
  comments: Comment[];
  content: BlogContent;
}

export default async function Blog({ params }: { params: BlogParams }) {
  // Extract the id from params correctly
  const blogId = parseInt(params.id); // params is an object containing the id

  const blog = BlogData.find((blogg: Blog) => blogg.id === blogId);

  if (!blog) {
    notFound(); // If no blog is found, show a "not found" page
  }

  const shareToFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareToWhatsApp = () => {
    const url = window.location.href;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <main className="container mx-auto p-4">
      <div className="flex space-x-3">
        <Sidebar />
        <div className="bg-white p-6 rounded shadow w-3/4">
          <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
          <div className="flex gap-6">
            <div className="flex gap-2">
              <i className="fa-solid fa-pen-nib text-blue-500 text-xl"></i>
              <p className="text-gray-600 font-bold">By {blog.author}</p>
            </div>
            <div className="flex gap-2">
              <i className="fa-regular fa-calendar-days text-amber-500 text-xl"></i>
              <p className="text-gray-600 font-bold">on {blog.date}</p>
            </div>
          </div>
          <Image src={blog.pic} alt={blog.title} width={1000} height={100} />

          {/* Dynamically Render Content Sections */}
          {Object.entries(blog.content).map(([key, value]) => (
            <div key={key} className="mt-4">
              <p className="font-bold text-xl capitalize">{key.replace(/_/g, ' ')}</p>
              {Array.isArray(value) ? (
                <ul className="list-disc ml-6 mt-2">
                  {value.map((item, index) => (
                    <li key={index} className="mt-1">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2">{value}</p>
              )}
            </div>
          ))}

          <div className="mt-4 flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Like</button>
            <button 
              className="bg-gray-300 text-black px-4 py-2 rounded" 
              onClick={shareToFacebook}
            >
              Share to Facebook
            </button>
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded" 
              onClick={shareToWhatsApp}
            >
              Share to WhatsApp
            </button>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <form className="mb-6">
          <input type="text" placeholder="Enter Your Name" className="py-2 mb-2 border px-6 w-full" />
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
