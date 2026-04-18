Inspect one real API response first.

Inside `loadBooks`, the flow is:
1. fetch with the current `query`
2. read JSON from the response
3. turn `data.items` into a smaller array
4. call `setBooks(...)`
5. update `status`

For this UI, you only need a book id, a title, and a readable author line.
