"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const handleModelClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      // Already on home → scroll to section
      e.preventDefault();
      const el = document.getElementById("model");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-xl">RWL</span>
        <nav className="flex space-x-6 text-sm">
          <Link href="/" scroll={true}>Home</Link>
          <Link href="/#model" onClick={handleModelClick}>Model</Link>
          <Link href="/community">Community</Link>
          <Link href="/ai">AI</Link>
        </nav>
      </div>
    </header>
  );
}
