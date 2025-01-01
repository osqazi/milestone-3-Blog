import fs from 'fs';
import path from 'path';

// API Route to handle adding a comment to the blog
export default function handler(req, res) {
  if (req.method === "POST") {
    const { blogId, comment } = req.body; // Extract blogId and comment from the request body

    // Get the path to your BlogData file
    const filePath = path.join(process.cwd(), 'app/components/data/Blogdata.json');
    
    try {
      // Read BlogData from the file
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      // Find the blog that corresponds to the given blogId
      const blog = data.find((b) => b.id === blogId);

      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }

      // Add the new comment to the blog
      blog.comments.push(comment);

      // Save the updated BlogData back to the file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      // Return a success response with the updated comments
      return res.status(200).json({ message: "Comment added successfully", comments: blog.comments });
    } catch (error) {
      return res.status(500).json({ message: "Error saving comment", error: error.message });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
