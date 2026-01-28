import { useState } from "react";
import { RotateCw } from "lucide-react";

interface FlashcardProps {
  role: string;
  emoji: string;
  subtitle: string;
  whoYouAre: string;
  yourJob: string | string[];
  keyPhrases: string[];
  remember: string;
  colorClass: string;
  borderColorClass: string;
}

const Flashcard = ({
  role,
  emoji,
  subtitle,
  whoYouAre,
  yourJob,
  keyPhrases,
  remember,
  colorClass,
  borderColorClass,
}: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle yourJob as either string or array
  const jobItems = Array.isArray(yourJob) ? yourJob : [yourJob];

  return (
    <div
      className="perspective-1000 w-full h-[320px] md:h-[340px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full preserve-3d flashcard-flip ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 backface-hidden rounded-xl ${colorClass} p-5 flex flex-col items-center justify-center text-center shadow-xl border-2 ${borderColorClass}`}
        >
          <div className="text-4xl md:text-5xl mb-3">{emoji}</div>
          <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
            Your Role: {role}
          </h3>
          <p className="text-white/90 text-sm md:text-base font-body leading-snug px-2">
            {subtitle}
          </p>
          <div className="absolute bottom-3 flex items-center gap-1.5 text-white/70 text-xs">
            <RotateCw size={12} />
            <span>Click to flip</span>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 backface-hidden rotate-y-180 rounded-xl ${colorClass} p-4 flex flex-col shadow-xl border-2 ${borderColorClass} overflow-hidden`}
        >
          <div className="flex-1 flex flex-col text-white text-left space-y-1.5">
            <div>
              <h4 className="font-display text-xs font-bold text-white/90 mb-0.5">
                Who you are:
              </h4>
              <p className="text-xs leading-snug text-white/95">{whoYouAre}</p>
            </div>

            <div>
              <h4 className="font-display text-xs font-bold text-white/90 mb-0.5">
                Your job:
              </h4>
              <ul className="space-y-0.5">
                {jobItems.map((job, index) => (
                  <li key={index} className="text-xs text-white/95 flex items-start gap-1">
                    <span className="text-primary shrink-0">•</span>
                    <span className="leading-tight">{job}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xs font-bold text-white/90 mb-0.5">
                Say things like:
              </h4>
              <ul className="space-y-0.5">
                {keyPhrases.map((phrase, index) => (
                  <li
                    key={index}
                    className="text-xs text-white/95 flex items-start gap-1"
                  >
                    <span className="text-primary shrink-0">→</span>
                    <span className="italic leading-tight">"{phrase}"</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-1 border-t border-white/20">
              <p className="text-xs text-white/80">
                <span className="font-bold">Remember:</span> {remember}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-white/70 text-xs pt-1">
            <RotateCw size={12} />
            <span>Click to flip</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
