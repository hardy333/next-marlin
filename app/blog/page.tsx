import BlogPostsSection from "./BlogPostsSection";

// Css
import "./blog.css";
import "./blog-posts-section.css";
import BlogShowcase from "./Showcase";
import BigBlogPost from "./BigBlogPost";
import BlogFilters from "./BlogFilters";

const Blog = () => {
 

  return (
    <>
      <BlogShowcase />
      <BlogFilters />
      <div className="container-small">
        <BigBlogPost />
      </div>
      <BlogPostsSection />
    </>
  );
};

export default Blog;
