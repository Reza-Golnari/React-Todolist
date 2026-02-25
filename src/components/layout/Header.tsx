import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link
          to="/"
          className="text-xl font-semibold text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-300"
        >
          Todo
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
