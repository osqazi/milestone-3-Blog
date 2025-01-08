"use client";
import { useState } from "react";

export default function CommentForm({ blogId }: { blogId: string }) {
  const [comment, setComment] = useState({ name: "", content: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");  // Clear previous messages
    
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId,
          name: comment.name,
          content: comment.content,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Comment added successfully!");
        setComment({ name: "", content: "" });  // Clear form fields
      } else {
        setMessage(result.message || "Failed to add comment.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={comment.name}
          onChange={(e) => setComment({ ...comment, name: e.target.value })}
          className="py-2 mb-2 border px-6 w-full"
        />
        <textarea
          placeholder="Write your comment..."
          value={comment.content}
          onChange={(e) => setComment({ ...comment, content: e.target.value })}
          className="w-full p-4 border rounded mb-4"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
