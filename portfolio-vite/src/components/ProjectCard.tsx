// card component for projects with title, location, time, description, and media

interface ProjectCardProps {
    title: string; 
    locationTime?: string; 
    skills?: string; 
    children?: React.ReactNode; 
    media?: React.ReactNode; 
    color?: 'primary' | 'light20' | 'light30' | 'light60' | 'light50'; 
} 

const colorVariants: Record<NonNullable<ProjectCardProps['color']>, string> = {
    primary: 'bg-primary border border-gray-200',
    light20: 'bg-[#faf5e9] border border-[#faf5e9]',     
    light30: 'bg-[#fbf6ec] border border-[#fbf6ec]',    
    light60: 'bg-[#fdfaf4] border border-[#fdfaf4]',    
    light50: 'bg-[#fcf9f2] border border-[#fcf9f2]',   
};

const ProjectCard = ({ title, locationTime, skills, children, media, color = "light60" }: ProjectCardProps) => {
    return (
        <div className={`rounded-xl shadow-md p-6 space-y-4 max-w-4xl w-full transition-transform duration-300 hover:scale-[1.01] ${colorVariants[color]}`}>
            <div className="space-y-1">
                <h3 className="text-xl font-semibold">{title}</h3>
                {locationTime && <p className="text-sm italic text-gray-500">{locationTime}</p>}
                {skills && <p className="text-sm text-gray-500">{skills}</p>}
            </div>
            <div className="text-base text-gray-800 space-y-3">
                {children}
            </div>
            {media && (
                <div className="pt-4">
                    {media}
                </div>
            )}
        </div>
    );
};

export default ProjectCard; 