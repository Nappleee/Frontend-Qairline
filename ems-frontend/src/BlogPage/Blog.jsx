import React from "react";
import "./Blog.css";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Destinations for 2024",
      description: "Discover the most beautiful places to visit this year, from exotic beaches to breathtaking mountains.",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 2,
      title: "Travel Tips for First-Time Flyers",
      description: "Flying for the first time? Here's what you need to know to make your journey stress-free and enjoyable.",
      image: "https://via.placeholder.com/400x250",
    },
    {
      id: 3,
      title: "The Best Airlines for Comfort and Affordability",
      description: "Explore our picks for the most comfortable and budget-friendly airlines.",
      image: "https://via.placeholder.com/400x250",
    },
  ];

  return (
    <div className="blog-page">
      <div className="container">
        <h2 className="blog-title">Our Latest Blogs</h2>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
              <div className="blog-card">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-content">
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-description">{blog.description}</p>
                  <a href={`/blog/${blog.id}`} className="read-more">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
