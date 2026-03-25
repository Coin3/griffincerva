import { useParams, Link } from "react-router-dom";
import Markdown from "react-markdown";
import { getPost } from "../content/posts";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <section className="blog-post">
        <h1>Post not found</h1>
        <p className="blog-post__muted">
          That post doesn't exist.{" "}
          <Link to="/blog">Back to blog</Link>
        </p>
      </section>
    );
  }

  return (
    <article className="blog-post">
      <header className="blog-post__header">
        <Link to="/blog" className="blog-post__back">
          &larr; Back to blog
        </Link>
        <h1 className="blog-post__title">{post.title}</h1>
        <time className="blog-post__date">{formatDate(post.date)}</time>
      </header>

      <div className="blog-post__body">
        <Markdown>{post.body}</Markdown>
      </div>
    </article>
  );
}
