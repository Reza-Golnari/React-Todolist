import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link
        to="/"
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        About
      </Link>
    </nav>
  );
}
