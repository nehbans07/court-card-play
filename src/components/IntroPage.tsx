import courtroomLayout from "@/assets/courtroom-layout.png";

const IntroPage = () => {
  const keyRules = [
    "The Accused speaks from personal experience",
    "Society does not argue directly — its lawyer speaks for it",
    "Lawyers do the debating",
    "Witnesses are invited by lawyers",
    "The Public listens and reflects",
    "This is about understanding, not winning",
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
          🏛️ Courtroom of Emotions: How It Works
        </h2>
        <p className="text-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          In this courtroom, emotions are on trial — not to punish, but to understand.
        </p>
      </div>

      {/* Three Forces */}
      <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-border mb-6">
        <h3 className="font-display text-lg md:text-xl font-bold text-primary mb-3 text-center">
          There are three main forces:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="flex items-center gap-3 bg-role-accused/20 rounded-lg p-3 border border-role-accused-light/30">
            <span className="text-2xl">😔</span>
            <div>
              <p className="font-display font-bold text-foreground text-sm">The Accused</p>
              <p className="text-xs text-muted-foreground">A person and their emotions</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-role-prosecutor/20 rounded-lg p-3 border border-role-prosecutor-light/30">
            <span className="text-2xl">👨‍💼</span>
            <div>
              <p className="font-display font-bold text-foreground text-sm">Society</p>
              <p className="text-xs text-muted-foreground">Rules, norms, expectations</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-role-judge/20 rounded-lg p-3 border border-role-judge-light/30">
            <span className="text-2xl">👩‍⚖️</span>
            <div>
              <p className="font-display font-bold text-foreground text-sm">The Judge/Jury</p>
              <p className="text-xs text-muted-foreground">Who listens and decides</p>
            </div>
          </div>
        </div>
        <p className="text-center text-foreground/80 text-sm mt-3 italic">
          Each side is supported by a lawyer who speaks for them.
        </p>
      </div>

      {/* Visual Layout Image */}
      <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-border mb-6">
        <h3 className="font-display text-lg md:text-xl font-bold text-primary mb-4 text-center">
          🔍 Visual Layout
        </h3>
        <div className="flex justify-center">
          <img
            src={courtroomLayout}
            alt="Courtroom of Emotions layout showing Judge/Jury at top, lawyers on sides, accused and society in middle, witness and public at bottom"
            className="rounded-lg shadow-lg max-w-full h-auto border-2 border-border"
          />
        </div>
      </div>

      {/* Key Rules */}
      <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-border">
        <h3 className="font-display text-lg md:text-xl font-bold text-primary mb-4 text-center">
          🧠 Key Rules (Very Important)
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
          {keyRules.map((rule, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-foreground/90 text-sm md:text-base"
            >
              <span className="text-primary font-bold shrink-0">→</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IntroPage;
