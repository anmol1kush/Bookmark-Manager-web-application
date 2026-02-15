import { useState } from "react";

export default function useBookmarks(initial = []) {
  const [bookmarks, setBookmarks] = useState(initial);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(null);

  const add = (b) => setBookmarks([...bookmarks, { ...b, id: Date.now() }]);
  const remove = (id) => setBookmarks(bookmarks.filter(b => b.id !== id));
  const edit = (updated) =>
    setBookmarks(bookmarks.map(b => b.id === updated.id ? updated : b));

  const filtered = bookmarks.filter(b => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.url.toLowerCase().includes(search.toLowerCase());

    const matchesTag = activeTag ? b.tags?.includes(activeTag) : true;

    return matchesSearch && matchesTag;
  });

  return {
    bookmarks: filtered,
    add,
    remove,
    edit,
    search,
    setSearch,
    activeTag,
    setActiveTag
  };
}
