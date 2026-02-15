import { useState } from "react";

export default function BookmarkForm({ onAdd }) {
  const [form, setForm] = useState({
    url: "",
    title: "",
    description: "",
    tags: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.url || !form.title) {
      setError("URL and Title are required");
      return;
    }

    try {
      new URL(form.url);
    } catch {
      setError("Invalid URL format");
      return;
    }

    onAdd({
      ...form,
      tags: form.tags.split(",").map(t => t.trim()).filter(Boolean)
    });

    setForm({ url: "", title: "", description: "", tags: "" });
    setError("");
  };

  return (
    <form onSubmit={submit} className="space-y-3 mb-6">
      {error && <p className="text-red-500">{error}</p>}

      <input name="url" placeholder="URL" value={form.url}
        onChange={handleChange} className="w-full p-2 border rounded" />

      <input name="title" placeholder="Title" value={form.title}
        onChange={handleChange} className="w-full p-2 border rounded" />

      <textarea name="description" placeholder="Description"
        value={form.description} onChange={handleChange}
        className="w-full p-2 border rounded" />

      <input name="tags" placeholder="Tags (comma separated)"
        value={form.tags} onChange={handleChange}
        className="w-full p-2 border rounded" />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Bookmark
      </button>
    </form>
  );
}
