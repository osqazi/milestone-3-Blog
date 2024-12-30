import Link from "next/link";
import BlogData from "./data/Blogdata";
import Image from "next/image";

export default async function Sidebar(){
    const blogs = await BlogData;
    return(
        <aside className="w-1/4 bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-4 text-center text-2xl">Popular Blogs</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="mb-2 text-wrap font-bold my-8">
                <div className="text-center">
              <Link href={`/blogs/${blog.id}`}>
              <div className="w-full flex justify-center">
              <Image src={blog.pic} alt={blog.title} width={200} height={200} className="object-cover w-full"/>
              </div>
              <p>{blog.title}</p>
              </Link>
              </div>
              <hr className="my-2 border-gray-300 shadow-md"/>
            </li>
          ))}
        </ul>
      </aside>
    )
}