import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Recruiting Without Limits",
  description: "Speed and Scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 antialiased">
        {/* Top navigation */}
        <Header />

        {/* Main content area */}
        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-6 py-10">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
