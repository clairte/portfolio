import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioThumbnailProps {
  imageSrc: string;
  audioSrc: string;
  title: string;
  subtitle?: string;
}

const AudioThumbnail = ({ imageSrc, audioSrc, title, subtitle }: AudioThumbnailProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle play/pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Pause all other audio elements on the page
      document.querySelectorAll('audio').forEach((audio) => {
        if (audio !== audioRef.current) {
          audio.pause();
        }
      });
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Listen for audio ending
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-[190px]">
      {/* Thumbnail with play button overlay */}
      <div 
        className="relative aspect-square w-full rounded-xl overflow-hidden shadow-md cursor-pointer group"
        onClick={togglePlay}
      >
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Play/Pause button overlay */}
        <button 
          className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-secondary/90 hover:bg-secondary flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" fill="white" />
          ) : (
            <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
          )}
        </button>

        {/* Playing indicator overlay */}
        {isPlaying && (
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        )}
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Title and subtitle */}
      <div className="mt-3 text-center w-full">
        <h4 className="text-base font-medium text-gray-800 truncate">{title}</h4>
        {subtitle && (
          <p className="text-sm text-gray-500 mt-0.5 truncate">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default AudioThumbnail;

