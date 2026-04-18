import { useEffect, useState } from "react";

export default function App() {
  const [query, setQuery] = useState("javascript");
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function loadBooks() {
      setStatus("loading");

      try {
        // Which URL should you fetch if the search term lives in `query`?
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await response.json();

        // What should happen here if `response.ok` is false?
        // Which few fields from each item are enough for this UI?
        // How could you safely handle a book that has no authors yet?
        const nextBooks = [];

        setBooks(nextBooks);
        setStatus("success");
      } catch (error) {
        // If the request fails, what should the status become?
        setBooks([]);
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
