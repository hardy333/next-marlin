"use client";
import BigBlogPost from "./BigBlogPost";
import BlogPostsSection from "./BlogPostsSection";
import { useBlogFilterContext } from "./blogFilterContext";
import { useMediaQuery } from "@uidotdev/usehooks";
const AllBlogsSection = ({ data, lang }: { data: any; lang: "en" | "geo" }) => {
  const { blogFilter } = useBlogFilterContext();

  let filteredBlogs = data?.filter(
    (post: any) => post.categoryTag.name[lang] === blogFilter
  );

  if (blogFilter === "All" || blogFilter === "ყველა") {
    filteredBlogs = data;
  }

  // below 1000px big blog post is display: none;
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1000px)");

  return (
    <>
      <div className="container-small">
        <BigBlogPost lang={lang} post={filteredBlogs[0]} />
      </div>
      <BlogPostsSection
        lang={lang}
        data={filteredBlogs?.slice(isSmallDevice ? 0 : 1, filteredBlogs.length)}
      />
    </>
  );
};

export default AllBlogsSection;
