export default function Pagination({ page, setPage }) {
  return (
    <div className="flex gap-4 justify-center mt-6">
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        className="px-3 py-1 border rounded"
      >
        Prev
      </button>
      <span>Page {page}</span>
      <button
        onClick={() => setPage((p) => p + 1)}
        className="px-3 py-1 border rounded"
      >
        Next
      </button>
    </div>
  );
}
