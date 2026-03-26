import { Link } from "react-router-dom";
import { getAllPosts } from "../content/posts";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <p style={{ fontSize: "3rem", fontWeight: "bold", color: "hotpink", textAlign: "center", margin: "2rem 0" }}>
        Griffin loves Yuri! 🩷
      </p>

      <section className="hero" id="about">
        <p className="eyebrow">Personal site</p>
        <h1 className="headline">
          Public notes, writing, and experiments in one place.
        </h1>
        <p className="lede">
          This is a minimal home base. A place for long-form writing, project
          notes, and the occasional experiment.
        </p>
      </section>

      <section className="grid" aria-label="Highlights">
        <article className="card" id="blog">
          <h2>Blog</h2>
          <p className="card__meta">Long-form writing &amp; updates</p>
          {recentPosts.length > 0 ? (
            <ul className="card__post-list">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`}>
                    <span>{post.title}</span>
                    <span className="card__post-date">
                      {formatDate(post.date)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Posts coming soon.</p>
          )}
          <Link className="card__link" to="/blog">
            Read the blog &rarr;
          </Link>
        </article>
        <article className="card" id="projects">
          <h2>Projects</h2>
          <p className="card__meta">
            Things you have shipped or tinkered with
          </p>
          <p>Showcase repos, demos, and odd experiments with short blurbs.</p>
          <a className="card__link" href="#">
            Browse projects &rarr;
          </a>
        </article>
      </section>
    </>
  );
}
