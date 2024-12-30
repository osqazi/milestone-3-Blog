import Link from "next/link";
import Sidebar from "./components/Sidebar";
import blogdata from '@/app/components/data/Blogdata'
import Image from "next/image";



export default async function Home() {
  const blogs = await blogdata;

  return (
    <main className="container mx-auto p-4 flex">
      <Sidebar/>
      <section className="w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-4">Latest Blogs</h1>
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-6 bg-white p-4 rounded shadow">
            <div>
              <Image src={blog.pic} alt="image.png" width={1000} height={800}/>
              
            </div>
            <h2 className="text-xl font-bold my-4">{blog.title}</h2>
            <p className="text-gray-600">{blog.author} - {blog.date}</p>
            <p className="mt-2">{blog.content.introduction}</p>
            <Link href={`/blogs/${blog.id}`} className="text-blue-500">Read more</Link>
          </div>
        ))}
      </section>
    </main>
  );
}

