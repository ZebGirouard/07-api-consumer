# 07 API Consumer

## Goal
Search for books with a public API and render the results clearly so request/response becomes concrete.

## What You Are Practicing
- What `fetch` does
- What `useEffect` is for
- How an API response becomes simpler UI data
- How loading and error states help users understand what is happening

## Start Here
1. Run `npm install`.
2. Run `npm run dev`.
3. Open `src/App.jsx` and go to the `loadBooks` function.
4. Finish the request so it uses the current `query`.
5. Turn the API response into a simpler `books` array for the UI.

The project uses the Google Books API because it gives you a realistic search workflow without needing your own backend.

## Stretch Goals
- Add an empty-state message.
- Add a loading spinner.
- Show the book cover when one is available.
