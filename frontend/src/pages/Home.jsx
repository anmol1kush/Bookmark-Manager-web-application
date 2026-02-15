import BookmarkForm from "../Components/BookmarkForm";
import BookmarkList from "../Components/BookmarkList";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";
import useBookmarks from "../hooks/useBookmarks";

export default function Home() {
  const {
    bookmarks,
    add,
    remove,
    edit,
    search,
    setSearch,
    activeTag,
    setActiveTag
  } = useBookmarks([]);

  return (
    <div className="max-w-2xl mx-auto">
      <BookmarkForm onAdd={add} />
      <SearchBar value={search} onChange={setSearch} />
      <TagFilter activeTag={activeTag} clear={() => setActiveTag(null)} />

      <BookmarkList
        bookmarks={bookmarks}
        onDelete={remove}
        onEdit={edit}
        onTagClick={setActiveTag}
      />
    </div>
  );
}
