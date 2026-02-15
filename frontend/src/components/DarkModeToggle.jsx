import { useTheme } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 border rounded"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
