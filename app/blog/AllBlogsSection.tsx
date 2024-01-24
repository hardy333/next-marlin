"use client"
import BigBlogPost from './BigBlogPost'
import BlogPostsSection from './BlogPostsSection'
import { simpleBlogCard } from './page'
import { useBlogFilterContext } from './blogFilterContext'

const AllBlogsSection = ({data}: {data: simpleBlogCard[]}) => {

    const {blogFilter} = useBlogFilterContext()


  
    let filteredBlogs = data?.filter(post => post.categoryTag === blogFilter)
  
    if(blogFilter === "All"){
      filteredBlogs = data
    }

  return (
    <>
     <div className="container-small">
        <BigBlogPost post={filteredBlogs[0]} />
      </div>
      <BlogPostsSection data={filteredBlogs?.slice(1, filteredBlogs.length)} />
    
    </>
  )
}

export default AllBlogsSection