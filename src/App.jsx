import { useEffect, useState } from "react";

export default function App() {
  const [query, setQuery] = useState("javascript");
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function loadBooks() {
      setStatus("loading");

      // Fetch books from the Google Books API using the `query` state.
      // Store a simplified list in `books` with:
      // id, title, authors, and thumbnail.
      // If the request fails, set status to "error".
    }

    loadBooks();
  }, [query]);

  return (
    <main className="page">
      <section className="panel">
        <p className="eyebrow">Search in, results out</p>
        <h1>Books API Search</h1>
        <form
          className="search-form"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            setQuery(formData.get("query"));
          }}
        >
          <input name="query" defaultValue={query} placeholder="Search for books" />
          <button type="submit">Search</button>
        </form>
        <p>Status: {status}</p>
        <ul className="post-list">
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong>
              <p>{book.authors}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
