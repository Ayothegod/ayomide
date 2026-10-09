import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyCode({ code }: { code: string }) {
  const [ok, setOk] = useState(false);
  return (
    <div className="mt-4 flex items-center justify-between gap-3 rounded-sm border border-zinc-800 bg-zinc-950 px-4 py-3 font-mono text-sm text-zinc-200">
      <code className="overflow-x-auto whitespace-nowrap">
        <span className="select-none text-zinc-600">$ </span>
        {code}
      </code>
      <button
        aria-label="Copy command"
        className="cursor-pointer text-zinc-500 transition hover:text-white"
        onClick={() => {
          navigator.clipboard.writeText(code);
          setOk(true);
          setTimeout(() => setOk(false), 1500);
        }}
      >
        {ok ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}
