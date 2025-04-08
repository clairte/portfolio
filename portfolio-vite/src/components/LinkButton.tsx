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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-white hover:bg-accent transition-transform duration-300 shadow-md"
        >
            <ExternalLink size={18} />
            <span>{label}</span>
        </a>
    )
};

export default LinkButton;