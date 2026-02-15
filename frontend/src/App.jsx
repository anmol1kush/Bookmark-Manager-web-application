import Home from "./pages/Home";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-4 flex justify-between items-center shadow bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold">🔖 Bookmark Manager</h1>
        <DarkModeToggle />
      </header>

      <main className="p-6">
        <Home />
      </main>
    </div>
  );
}

export default App;

