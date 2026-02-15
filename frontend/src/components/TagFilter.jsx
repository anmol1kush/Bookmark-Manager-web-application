export default function TagFilter({ activeTag, clear }) {
  if (!activeTag) return null;

  return (
    <div className="mb-4">
      <span className="mr-2">Filtering by:</span>
      <span className="bg-blue-200 px-2 py-1 rounded">
        #{activeTag}
      </span>
      <button onClick={clear} className="ml-3 text-red-500">
        Clear
      </button>
    </div>
  );
}
