import { WHATSAPP_LINK } from "../data/data";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-[80] inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_14px_34px_rgba(34,197,94,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-emerald-600 active:scale-95"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="pulse-ring absolute inset-0 rounded-full" />
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11.8 11.8 0 0012.1 0C5.8 0 .6 5.1.6 11.5c0 2 .5 3.9 1.5 5.6L0 24l7.1-2a11.4 11.4 0 005.1 1.2h.1c6.3 0 11.5-5.1 11.5-11.5 0-3.1-1.2-6-3.3-8.2zM12.2 21a9.4 9.4 0 01-4.8-1.3l-.3-.2-4.2 1.2 1.3-4.1-.2-.3a9.4 9.4 0 01-1.4-4.9c0-5.2 4.2-9.4 9.4-9.4a9.2 9.2 0 016.7 2.8 9.3 9.3 0 012.7 6.7A9.4 9.4 0 0112.2 21zm5.2-7c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1l-.6.8c-.2.2-.4.3-.7.1a7.8 7.8 0 01-2.3-1.4 8.6 8.6 0 01-1.6-2c-.2-.3 0-.5.1-.7l.4-.5.2-.4a.8.8 0 000-.6l-.9-2.2c-.2-.5-.5-.4-.7-.4h-.6a1.1 1.1 0 00-.8.4c-.3.3-1 1-1 2.4s1 2.8 1.2 3l.2.3a11.7 11.7 0 004.4 3.9c1.1.5 1.6.6 2.2.5.6 0 1.8-.8 2-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.7-.4z" />
      </svg>

      <span className="pointer-events-none absolute right-[4.7rem] rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
