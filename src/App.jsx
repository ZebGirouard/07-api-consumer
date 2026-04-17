import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function loadPosts() {
      setStatus("loading");

      // Fetch the first 5 posts from JSONPlaceholder
      // and store them in state with setPosts.
      // If the request fails, set status to "error".
    }

    loadPosts();
  }, []);

  return (
    <main className="page">
      <section className="panel">
        <p className="eyebrow">Request in, UI out</p>
        <h1>Public API Explorer</h1>
        <p>Status: {status}</p>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
