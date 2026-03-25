import { Link } from "react-router-dom";
import { getAllPosts } from "../content/posts";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <section className="blog-list">
      <header className="blog-list__header">
        <h1 className="blog-list__title">Blog</h1>
        <p className="blog-list__desc">Long-form writing, notes, and updates.</p>
      </header>

      <ul className="blog-list__posts">
        {posts.map((post) => (
          <li key={post.slug} className="blog-list__item">
            <Link to={`/blog/${post.slug}`} className="blog-list__link">
              <span className="blog-list__date">{formatDate(post.date)}</span>
              <h2 className="blog-list__post-title">{post.title}</h2>
              {post.summary && (
                <p className="blog-list__summary">{post.summary}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
