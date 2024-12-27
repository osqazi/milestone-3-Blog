export default async function GetBlog(id:any) {
    const blogs = [
      {
        id: "1",
        title: "Understanding Next.js",
        author: "John Doe",
        date: "2024-12-27",
        image: "https://via.placeholder.com/800x400",
        content: "Detailed content about Next.js...",
        comments: [
          { name: "User1", date: "2024-12-26", content: "Great post!" },
          { name: "User2", date: "2024-12-25", content: "Very informative." },
        ],
      },
      {
        id: "2",
        title: "Getting Started with Tailwind CSS",
        author: "Jane Smith",
        date: "2024-12-26",
        image: "https://via.placeholder.com/800x400",
        content: "Detailed content about Tailwind CSS...",
        comments: [
          { name: "User3", date: "2024-12-26", content: "Super helpful guide!" },
        ],
      },
    ];
  
    return blogs.find((blog) => blog.id === id) || null;
  }