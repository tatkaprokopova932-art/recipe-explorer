import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>404 — Recipe not found</h1>
      <p>Sorry, we could not find this recipe.</p>
      <Link href="/recipes" className="back-link">← Back to recipes</Link>
    </>
  );
}