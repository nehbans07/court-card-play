const Instructions = () => {
  const steps = [
    {
      number: 1,
      text: "Click any flashcard to flip it and see detailed information",
    },
    {
      number: 2,
      text: "Study your assigned role carefully before the activity",
    },
    {
      number: 3,
      text: "Use the key phrases as examples during the courtroom session",
    },
    {
      number: 4,
      text: 'Click "Print as PDF" to save or print for offline reference',
    },
  ];

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-border mb-8">
      <h2 className="font-display text-xl md:text-2xl font-bold text-primary text-center mb-4">
        How to Use These Flashcards
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mb-2">
              {step.number}
            </div>
            <p className="text-foreground/90 text-xs md:text-sm leading-snug">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructions;
