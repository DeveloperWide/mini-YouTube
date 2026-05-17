import { Mic } from "lucide-react";
import { memo } from "react";

const SearchInput = memo(() => {
  return (
    <div className="flex w-full max-w-2xl items-center gap-3">
      <label className="flex flex-1 items-center gap-3 rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-2 transition focus-within:border-zinc-500 focus-within:ring-2 focus-within:ring-zinc-700/60">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-zinc-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>

        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
        />
      </label>

      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15"
        aria-label="Voice search"
      >
        <Mic size={20} strokeWidth={1.25} />
      </button>
    </div>
  );
});

SearchInput.displayName = "SearchInput";

export default SearchInput;
