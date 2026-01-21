import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    date: "19",
    month: "May",
    category: "Interior",
    title: "Best Coffee Inspiration Interior",
    author: "Maulidyah",
  },
  {
    id: 2,
    date: "23",
    month: "June",
    category: "Interior",
    title: "Seating Collection Inspiration",
    author: "Maulidyah",
  },
  {
    id: 3,
    date: "19",
    month: "May",
    category: "Inspirations",
    title: "Reinterprets the classic bookshelf",
    author: "Maulidyah",
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Featured Blog</h2>
        <p>We don't just make your coffee, we make your day!</p>
      </div>

      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-date">
              <span className="day">{post.date}</span>
              <span className="month">{post.month}</span>
            </div>

            {/* Kontent qismi */}
            <div className="blog-content">
              <div className="category-tag">{post.category}</div>
              <h3 className="blog-title">{post.title}</h3>

              <div className="blog-footer">
                <span className="posted-label">Posted by</span>
                <div className="author-box">
                  <div className="author-avatar"></div>
                  <span className="author-name">{post.author}</span>
                </div>
                <div className="action-icons">
                  <span className="icon">✉</span>
                  <span className="icon">🔗</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
