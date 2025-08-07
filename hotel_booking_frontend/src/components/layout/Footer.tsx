import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * Simple Footer with secondary links/info.
 */
export default function Footer() {
  return (
    <footer className="footer py-4 px-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center text-sm">
        <div className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Hotel Booking Platform
        </div>
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline text-white border-r border-white pr-3">About</Link>
          <Link href="/terms" className="hover:underline text-white border-r border-white pr-3">Terms</Link>
          <Link href="/privacy" className="hover:underline text-white">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
