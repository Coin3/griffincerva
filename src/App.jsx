import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import "./App.css";

const nav = [
  { label: "About", to: "/#about" },
  { label: "Blog", to: "/blog" },
  { label: "Projects", to: "/#projects" },
];

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive =
    to === "/blog"
      ? location.pathname.startsWith("/blog")
      : location.pathname === "/" && to.includes("#");

  return (
    <Link to={to} className={isActive ? "nav--active" : undefined}>
      {children}
    </Link>
  );
}

function App() {
  return (
    <div className="layout">
      <header className="header">
        <Link className="logo" to="/">
          Griffin Cerva
        </Link>
        <nav className="nav" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      <footer className="footer">
        <span className="footer__mono">&copy; {new Date().getFullYear()}</span>
        <span className="footer__sep" aria-hidden="true">
          /
        </span>
        <a href="mailto:you@example.com">Contact</a>
      </footer>
    </div>
  );
}

export default App;
