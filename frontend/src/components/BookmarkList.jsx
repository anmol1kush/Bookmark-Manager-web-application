import BookmarkItem from "./BookmarkItem";

export default function BookmarkList({ bookmarks, ...actions }) {
  if (bookmarks.length === 0) {
    return <p className="text-gray-500">No bookmarks found.</p>;
  }

  return (
    <div className="space-y-3">
      {bookmarks.map(b => (
        <BookmarkItem key={b.id} bookmark={b} {...actions} />
      ))}
    </div>
  );
}
