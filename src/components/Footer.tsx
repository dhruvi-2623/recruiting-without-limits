export default function Footer() {
  return (
    <footer className="px-6 py-10 text-sm text-gray-500 border-t mt-20">
      <div className="max-w-6xl mx-auto">
        © {new Date().getFullYear()} RWL
      </div>
    </footer>
  );
}
