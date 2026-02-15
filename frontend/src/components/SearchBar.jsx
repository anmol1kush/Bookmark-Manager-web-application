export default function SearchBar({ value, onChange }) {
  return (
    <input
      placeholder="Search by title or URL..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full p-2 border rounded mb-4"
    />
  );
}
