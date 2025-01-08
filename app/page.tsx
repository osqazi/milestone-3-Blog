
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source:any) {
  return builder.image(source);
}

const bebasNeue = Bebas_Neue({
  subsets: ["latin"], // Add subsets if necessary
  weight: "400", // Adjust weight if needed
  variable: "--font-bebas-neue", // Optional: define a CSS variable for the font
});


async function getData(){
  const fetchData = await client.fetch('*[_type == "blog"]')
  return fetchData;
}

export default async function Home() {
  const blogs= await getData();

  return (
    <main className="container mx-auto p-4 flex">
      <div className="grid grid-cols-1 lg:grid-cols-[22%_78%] md:grid-cols-[22%_78%]">
        <div className="col-span-1 order-2 lg:order-1 md:order-1">
      <Sidebar/>
      </div>
      <div className="col-span-1 order-1 lg:order-2 md:order-2">
      <section className=" p-4">
        <h1 className="text-3xl font-bold mb-4">Latest Blogs</h1>
        {blogs.map((blog:any, i:number) => (
          <div key={i} className="mb-6 bg-white p-4 rounded shadow">
            <div>
              <Image src={urlFor(blog.pic).url()} alt="image.png" width={1000} height={800}/>
              
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
            <Link href={`/blog/${blog._id}`} className="text-purple-400 font-bold">Read more...</Link>
          </div>
        ))}
      </section>
      </div>
      </div>
    </main>
  );
}

