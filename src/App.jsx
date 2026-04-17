import { useEffect, useState } from "react";

function normalizeBook(item) {
  const info = item.volumeInfo || {};

  return {
    id: item.id,
    title: info.title || "Untitled",
    authors: info.authors ? info.authors.join(", ") : "Unknown author",
    thumbnail: info.imageLinks?.thumbnail || null
  };
}

export default function App() {
  const [query, setQuery] = useState("javascript");
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function loadBooks() {
      setStatus("loading");

      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=5`
        );

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = await response.json();
        const items = Array.isArray(data.items) ? data.items : [];

        setBooks(items.map(normalizeBook));
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
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
            const nextQuery = String(formData.get("query") || "").trim();

            if (nextQuery) {
              setQuery(nextQuery);
            }
          }}
        >
          <input name="query" defaultValue={query} placeholder="Search for books" />
          <button type="submit">Search</button>
        </form>
        <p>Status: {status}</p>
        {status === "success" && books.length === 0 ? <p>No books found.</p> : null}
        <ul className="post-list">
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong>
              <p>{book.authors}</p>
              {book.thumbnail ? <img src={book.thumbnail} alt="" /> : null}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
