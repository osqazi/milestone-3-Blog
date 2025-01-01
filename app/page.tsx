import Link from "next/link";
import Sidebar from "./components/Sidebar";
import blogdata from '@/app/components/data/Blogdata'
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"], // Add subsets if necessary
  weight: "400", // Adjust weight if needed
  variable: "--font-bebas-neue", // Optional: define a CSS variable for the font
});

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
            <h2 className={`text-4xl font-bold my-4 ${bebasNeue.className}`}>{blog.title}</h2>
            <div className="flex gap-6">
            <div className="flex gap-2">
            <i className="fa-solid fa-pen-nib text-blue-500 text-xl"></i>
            <p className="text-gray-600 font-bold">{blog.author}</p>
            </div>
            <div className="flex gap-2">
           <i className="fa-regular fa-calendar-days text-amber-500 text-xl"></i>
            <p className="text-gray-600 font-bold">{blog.date}</p>
            </div>
            </div>
            
            <p className="mt-2 text-justify mb-2">{blog.content.introduction}</p>
            <Link href={`/blogs/${blog.id}`} className="text-purple-400 font-bold">Read more...</Link>
          </div>
        ))}
      </section>
    </main>
  );
}

