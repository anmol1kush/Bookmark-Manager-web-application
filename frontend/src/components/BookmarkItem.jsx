import { useState } from "react";

export default function BookmarkItem({ bookmark, onDelete, onEdit, onTagClick }) {
  const [editing, setEditing] = useState(false);
  const [data, setData] = useState(bookmark);

  const save = () => {
    onEdit(data);
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="p-3 border rounded space-y-2">
        <input value={data.title}
          onChange={e => setData({ ...data, title: e.target.value })}
          className="w-full p-1 border rounded" />

        <textarea value={data.description}
          onChange={e => setData({ ...data, description: e.target.value })}
          className="w-full p-1 border rounded" />

        <button onClick={save} className="text-green-600">Save</button>
      </div>
    );
  }

  return (
    <div className="p-3 border rounded space-y-2">
      <a href={bookmark.url} target="_blank" rel="noreferrer"
        className="text-blue-600 font-semibold underline">
        {bookmark.title}
      </a>

      <p className="text-sm text-gray-600">{bookmark.description}</p>

      <div className="flex gap-2 flex-wrap">
        {bookmark.tags?.map(tag => (
          <span key={tag}
            onClick={() => onTagClick(tag)}
            className="cursor-pointer bg-blue-600 px-2 py-1 rounded text-xs">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        <button onClick={() => setEditing(true)} className="text-blue-800">Edit</button>
        <button onClick={() => onDelete(bookmark.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
}
