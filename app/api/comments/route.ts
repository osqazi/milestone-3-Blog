// /app/api/comments/route.ts

import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";  // Ensure you import your Sanity client



export async function POST(request: Request) {
  const { blogId, name, content } = await request.json();
  console.log(blogId, name, content)

  // Validate input
  if (!blogId || !name || !content) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    // Create a new comment object
    const newComment = {
      _type: "comment",
      blogId,
      name,
      content,
      date: new Date().toISOString(),
    };

    // Store the new comment in Sanity
    await client
      .patch(blogId)
      .setIfMissing({ comments: [] }) // Ensure 'comments' field exists
      .append("comments", [newComment])
      .commit();

    return NextResponse.json({ message: "Comment added successfully!" });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { message: "Failed to add comment." },
      { status: 500 }
    );
  }
}
