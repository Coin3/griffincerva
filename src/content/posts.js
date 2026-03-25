import fm from "front-matter";

const modules = import.meta.glob("./posts/*.md", {
  query: "?raw",
  eager: true,
});

const posts = Object.entries(modules)
  .map(([filepath, mod]) => {
    const slug = filepath.replace("./posts/", "").replace(".md", "");
    const { attributes, body } = fm(mod.default);
    return { slug, body, ...attributes };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllPosts() {
  return posts;
}

export function getPost(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}
