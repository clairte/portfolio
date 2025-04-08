interface TextBlockProps {
    title?: string; 
    bullets?: string[]; 
    children?: React.ReactNode; 
}

const TextBlock = ({ title, bullets, children }: TextBlockProps) => (
    <div className="text-left space-y-4 max-w-[40ch] w-full mx-auto">
        {title && <h2 className="text-2xl font-semibold">{title}</h2>}
        <div className="text-base space-y-4">{children}</div>
        {bullets && (
            <ul className="list-disc list-inside text-sm space-y-1">
                {bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
            </ul>
        )}
    </div>
); 

export default TextBlock;