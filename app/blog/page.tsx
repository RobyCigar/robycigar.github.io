import { getSortedPostsData } from "@/utils/getSortedPostsData";
import BlogComponent from "./BlogComponent"; // Adjust the import path as needed

export default function BlogPage() {
  const initialPosts = getSortedPostsData();

  return <BlogComponent initialPosts={initialPosts} />;
}
