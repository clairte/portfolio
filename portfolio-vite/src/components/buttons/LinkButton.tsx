import { ExternalLink } from 'lucide-react';

interface LinkButtonProps {
    href: string; 
    label: string; 
}

const LinkButton = ({ href, label }: LinkButtonProps) => {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button text-white transition-all duration-300"
        >
            <ExternalLink size={18} />
            <span className="text-center min-w-[6rem]">{label}</span>
        </a>
    )
};

export default LinkButton;