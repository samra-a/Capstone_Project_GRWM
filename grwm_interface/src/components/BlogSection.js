import Blog from "../pictures/blog/Blog.png"

const BlogSection = () => {
    return ( 
        <div className="blog">
            <div className="blog-img">
                <img src={Blog} alt="image" />
            </div>

            <div className="blog-content">
                <h3 className="title">Embrace Your Body: Tips for Practicing Body Positivity</h3>
                <p className="message">Learn how to embrace your body and practice body positivity with these tips. From reframing negative thoughts to finding joy in movement, you can start feeling more confident and comfortable in your own skin today.</p>
                <button className="button"><a href="/blog-post">Read More</a></button>
            </div>

        </div>
     );
}
 
export default BlogSection;