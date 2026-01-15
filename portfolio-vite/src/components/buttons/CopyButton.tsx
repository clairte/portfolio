import { Copy } from 'lucide-react';
import { useState } from 'react';

interface CopyButtonProps {
  value: string;
  label: string;
}

const CopyButton = ({ value, label }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-white transition-all duration-300"
    >
      <Copy size={18} />
      <span className="w-[5.5rem]">
        {copied ? 'Copied!' : label}
    </span>
    </button>
  );
};

export default CopyButton;
