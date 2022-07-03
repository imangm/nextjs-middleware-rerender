import Link from "next/link";
export const Footer = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home (static route)</Link>
      </li>
      <li>
        <Link href="/blog">Blog (static route)</Link>
      </li>
      <li>
        <Link href="/blog/post">Blog Post (dynamic route)</Link>
      </li>
      <li>
        <Link href="/test/catchme">Random Page (catch-all route)</Link>
      </li>
    </ul>
  );
};
