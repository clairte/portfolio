// card component for projects with title, location, time, description, and media

interface ProjectCardProps {
    title: string; 
    locationTime?: string; 
    skills?: string; 
    children?: React.ReactNode; 
    media?: React.ReactNode; 
} 

const ProjectCard = ({ title, locationTime, skills, children, media }: ProjectCardProps) => {
    return (
        <div className="rounded-xl glass-card p-6 space-y-4 max-w-4xl w-full transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
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
