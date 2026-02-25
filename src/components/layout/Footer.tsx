import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-4 py-4 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="mx-auto flex max-w-4xl items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <span>© {year} Todo</span>
        <Link
          to="/about"
          className="hover:text-neutral-700 dark:hover:text-neutral-200"
        >
          About
        </Link>
      </div>
    </footer>
  );
}
