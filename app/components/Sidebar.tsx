import Link from "next/link";
import BlogData from "./data/Blogdata";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source:any) {
  return builder.image(source);
}

async function getData(){
  const fetchData = await client.fetch('*[_type == "blog"]')
  return fetchData;
}

export default async function Sidebar(){
  const blogs= await getData();
    
    return(
        <aside className="bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-4 text-center text-2xl">Popular Blogs</h2>
        <ul>
          {blogs.map((blog:any, i:number) => (
            <li key={i} className="mb-2 text-wrap font-bold my-8">
                <div className="text-center">
              <Link href={`/blog/${blog._id}`}>
              <div className="w-full flex justify-center">
              <Image src={urlFor(blog.pic).url()} alt={blog.title} width={200} height={200} className="object-cover w-full"/>
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