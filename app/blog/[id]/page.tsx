// Blog Page Component (Server Side)
import { notFound } from "next/navigation";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import ShareButtons from "@/app/components/ShareButtons";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import CommentForm from "@/app/components/CommentForm";
import { Bebas_Neue } from "next/font/google";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const bebasNeue = Bebas_Neue({
  subsets: ["latin"], // Add subsets if necessary
  weight: "400", // Adjust weight if needed
  variable: "--font-bebas-neue", // Optional: define a CSS variable for the font
});


async function getBlogData(id: string) {
  const data = await client.fetch(`*[_type == "blog" && _id == $id][0]`, {
    id,
  });
  return data;
}

export default async function Blog({ params }: any) {
  const { id } = params;
  const blog = await getBlogData(id);

  if (!blog) {
    notFound();
    return null;
  }

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-[22%_78%] md:grid-cols-[22%_78% gap-4">
      
      <div className="col-span-1 order-2 lg:order-1 md:order-1">
        <Sidebar />
        </div>
        <div className="col-span-1 order-1 lg:order-2 md:order-2 text-justify">
        <div className="bg-white p-6 rounded shadow">
          <h2 className={`text-4xl font-bold my-4 ${bebasNeue.className}`}>{blog.title}</h2>
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
          <Image
            src={urlFor(blog.pic).url() || "/fallback-image.jpg"}
            alt={blog.title}
            width={1000}
            height={100}
          />

          {/* Render the content in the correct order */}
          {blog.content.introduction && (
            <div className="mt-4">
              <p className="font-bold text-xl">Introduction</p>
              <p>{blog.content.introduction}</p>
            </div>
          )}

          {blog.content.what_it_is && (
            <div className="mt-4">
              <p className="font-bold text-xl">What it is</p>
              <p>{blog.content.what_it_is}</p>
            </div>
          )}

          {blog.content.core_features && (
            <div className="mt-4">
              <p className="font-bold text-xl">Core Features</p>
              <ul className="list-disc ml-6 mt-2">
                {blog.content.core_features.map((item: string, index: number) => (
                  <li key={index} className="mt-1">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {blog.content.benefits && (
            <div className="mt-4">
              <p className="font-bold text-xl">Benefits</p>
              <ul className="list-disc ml-6 mt-2">
                {blog.content.benefits.map((item: string, index: number) => (
                  <li key={index} className="mt-1">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {blog.content.use_cases && (
            <div className="mt-4">
              <p className="font-bold text-xl">Use Cases</p>
              <ul className="list-disc ml-6 mt-2">
                {blog.content.use_cases.map((item: string, index: number) => (
                  <li key={index} className="mt-1">{item}</li>
                ))}
              </ul>
            </div>
          )}

          {blog.content.getting_started && (
            <div className="mt-4">
              <p className="font-bold text-xl">Getting Started</p>
              <p>{blog.content.getting_started}</p>
            </div>
          )}

          {blog.content.conclusion && (
            <div className="mt-4">
              <p className="font-bold text-xl">Conclusion</p>
              <p>{blog.content.conclusion}</p>
            </div>
          )}

          <ShareButtons />

          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <CommentForm blogId={id} />
            <ul className="space-y-4">
              {blog.comments &&
              Array.isArray(blog.comments) &&
              blog.comments.length > 0 ? (
                blog.comments.map((comment: any, index: any) => (
                  <li key={index} className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-800 font-bold">{comment.name}</p>
                    <p className="text-gray-600 text-sm">{comment.date}</p>
                    <p className="mt-2">{comment.content}</p>
                  </li>
                ))
              ) : (
                <p>No comments available.</p>
              )}
            </ul>
          </section>
        </div>
        </div>
      
      </div>
    </main>
  );
}
