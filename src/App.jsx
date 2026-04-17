import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function loadPosts() {
      setStatus("loading");
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();
        setPosts(data);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
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
