interface CTAProps {
  text: string;
  onClick?: () => void;
}

export default function CTA({ text, onClick }: CTAProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl px-5 py-3 bg-black text-white hover:opacity-90"
    >
      {text}
    </button>
  );
}
