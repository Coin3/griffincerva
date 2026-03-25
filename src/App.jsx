import "./App.css";

const nav = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Projects", href: "#projects" },
];

function App() {
  return (
    <div className="layout">
      <header className="header">
        <a className="logo" href="#">
          Griffin Cerva
        </a>
        <nav className="nav" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero" id="about">
          <p className="eyebrow">Personal site</p>
          <h1 className="headline">
            Public notes, writing, and experiments in one place.
          </h1>
          <p className="lede">
            This is a minimal home base. Swap the copy, wire links to real
            pages, and grow the sections as you add posts and projects.
          </p>
        </section>

        <section className="grid" aria-label="Highlights">
          <article className="card" id="blog">
            <h2>Blog</h2>
            <p className="card__meta">Long-form writing &amp; updates</p>
            <p>Placeholder for your latest posts or a link to an archive.</p>
            <a className="card__link" href="#">
              Read the blog →
            </a>
          </article>
          <article className="card" id="projects">
            <h2>Projects</h2>
            <p className="card__meta">Things you have shipped or tinkered with</p>
            <p>Showcase repos, demos, and odd experiments with short blurbs.</p>
            <a className="card__link" href="#">
              Browse projects →
            </a>
          </article>
        </section>
      </main>

      <footer className="footer">
        <span className="footer__mono">© {new Date().getFullYear()}</span>
        <span className="footer__sep" aria-hidden="true">
          /
        </span>
        <a href="mailto:you@example.com">Contact</a>
      </footer>
    </div>
  );
}

export default App;
