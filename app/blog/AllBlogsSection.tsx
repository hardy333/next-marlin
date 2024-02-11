"use client";
import BigBlogPost from "./BigBlogPost";
import BlogPostsSection from "./BlogPostsSection";
import { simpleBlogCard } from "./page";
import { useBlogFilterContext } from "./blogFilterContext";

const AllBlogsSection = ({ data, lang }: { data: any; lang: "en" | "geo" }) => {
  const { blogFilter } = useBlogFilterContext();

  let filteredBlogs = data?.filter(
    (post: any) => post.categoryTag.name[lang] === blogFilter
  );

  if (blogFilter === "All" || blogFilter === "ყველა") {
    filteredBlogs = data;
  }

  return (
    <>
      <div className="container-small">
        <BigBlogPost lang={lang} post={filteredBlogs[0]} />
      </div>
      <BlogPostsSection
        lang={lang}
        data={filteredBlogs?.slice(1, filteredBlogs.length)}
      />
    </>
  );
};

export default AllBlogsSection;
