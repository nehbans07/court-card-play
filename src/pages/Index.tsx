import { Printer, Scale } from "lucide-react";
import Flashcard from "@/components/Flashcard";
import Instructions from "@/components/Instructions";
import { flashcardsData } from "@/data/flashcardsData";
import { Button } from "@/components/ui/button";

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background py-6 px-4 md:px-8">
      {/* Header */}
      <header className="text-center mb-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Scale className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            Courtroom Role Cards
          </h1>
          <Scale className="w-8 h-8 md:w-10 md:h-10 text-primary transform scale-x-[-1]" />
        </div>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Interactive flashcards to help you understand and prepare for your courtroom role
        </p>
      </header>

      {/* Print Button */}
      <div className="flex justify-center mb-6 no-print">
        <Button
          onClick={handlePrint}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold px-6 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-all hover:scale-105"
        >
          <Printer size={18} />
          Print as PDF
        </Button>
      </div>

      {/* Instructions */}
      <div className="max-w-6xl mx-auto no-print">
        <Instructions />
      </div>

      {/* Flashcards Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {flashcardsData.map((card, index) => (
            <Flashcard
              key={index}
              role={card.role}
              emoji={card.emoji}
              subtitle={card.subtitle}
              whoYouAre={card.whoYouAre}
              yourJob={card.yourJob}
              keyPhrases={card.keyPhrases}
              remember={card.remember}
              colorClass={card.colorClass}
              borderColorClass={card.borderColorClass}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-10 text-muted-foreground text-xs md:text-sm no-print">
        <p>🎭 Theatre Courtroom Activity • Learn by Role-Playing</p>
      </footer>
    </div>
  );
};

export default Index;
