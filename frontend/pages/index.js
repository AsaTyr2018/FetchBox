import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to FetchBox</h1>
      <p>Your local file management tool.</p>
      <nav>
        <ul>
          <li>
            <Link href="/upload">Upload</Link>
          </li>
          <li>
            <Link href="/files">Files</Link>
          </li>
          <li>
            <Link href="/groups">Groups</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
