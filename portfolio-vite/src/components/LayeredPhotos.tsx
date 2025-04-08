interface LayeredPhotosProps {
    topSrc: string; 
    bottomSrc: string; 
    altTop: string; 
    altBottom: string; 
}

const LayeredPhotos = ({ topSrc, bottomSrc, altTop, altBottom }: LayeredPhotosProps) => {
    return (
        <div className="ml-0 md:ml-12 pr-8">
            <div className="relative w-52 h-72">
                <img
                    src={bottomSrc}
                    alt={altBottom}
                    className="absolute w-full h-full object-cover rounded-xl rotate-6 shadow-lg translate-x-[5rem] translate-y-[-2rem]"
                    style={{ imageRendering: 'auto' }}
                />
                <img
                    src={topSrc}
                    alt={altTop}
                    className="absolute w-full h-full object-cover rounded-xl rotate-[-8deg] shadow-xl translate-x-[-2rem] translate-y-[2rem] scale-[0.95]"
                    style={{ imageRendering: 'auto' }}
                />
            </div>
        </div>
    ); 
};

export default LayeredPhotos;