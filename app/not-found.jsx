import Link from "next/link";

export default function notFound() {
  return (
    <section className="min-h-screen flex flex-col gap-2 justify-center items-center">
      <h1 className="text-7xl font-bold text-red-400">404</h1>
      <p className="p-2 text-neutral-100">
        Page is not found!, please try again later or go back to home page.
      </p>
      <Link href="/" className="general-button">
        Back to Home
      </Link>
    </section>
  );
}
