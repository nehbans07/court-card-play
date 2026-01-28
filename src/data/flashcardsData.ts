export interface FlashcardData {
  role: string;
  emoji: string;
  subtitle: string;
  whoYouAre: string;
  yourJob: string[];
  keyPhrases: string[];
  remember: string;
  colorClass: string;
  borderColorClass: string;
}

export const flashcardsData: FlashcardData[] = [
  {
    role: "JUDGE / JURY",
    emoji: "👩‍⚖️",
    subtitle: "(You sit in the middle)",
    whoYouAre: "The listener and decision-maker.",
    yourJob: [
      "Keep the space fair and respectful",
      "Listen to all sides",
      "Ask clarifying questions",
      "Decide what feels fair or unfair",
    ],
    keyPhrases: [
      "Order in the court.",
      "Can you explain that more simply?",
      "What supports this?",
      "I've heard everyone. Here's my decision.",
    ],
    remember: "You don't take sides — you listen first.",
    colorClass: "bg-role-judge",
    borderColorClass: "border-role-judge-light",
  },
  {
    role: "THE ACCUSED",
    emoji: "😔",
    subtitle: "(Your emotions are being judged)",
    whoYouAre: "A person whose emotions or reactions are questioned.",
    yourJob: [
      "Share what happened",
      "Explain how you felt",
      "Speak honestly, not defensively",
    ],
    keyPhrases: [
      "This is what happened…",
      "I felt ___ because…",
      "When this happened, it affected me…",
      "I just wanted to be understood.",
    ],
    remember: "You don't argue rules — you share your truth.",
    colorClass: "bg-role-accused",
    borderColorClass: "border-role-accused-light",
  },
  {
    role: "LAWYER FOR SOCIETY",
    emoji: "👨‍💼",
    subtitle: "(Voice of social rules)",
    whoYouAre: "The person who speaks for society's expectations.",
    yourJob: [
      "Explain common emotional rules",
      "Argue why society believes these rules exist",
      "Question the accused using social norms",
    ],
    keyPhrases: [
      "Society expects people to…",
      "This is seen as inappropriate because…",
      "These rules exist to maintain order.",
      "What message does this send?",
    ],
    remember: "You are defending a system, not attacking a person.",
    colorClass: "bg-role-prosecutor",
    borderColorClass: "border-role-prosecutor-light",
  },
  {
    role: "LAWYER FOR THE ACCUSED",
    emoji: "🧑‍⚖️",
    subtitle: "(Voice of emotional rights)",
    whoYouAre: "The defender of the accused's right to feel.",
    yourJob: [
      "Protect emotional expression",
      "Question unfair or outdated rules",
      "Highlight harm caused by judgment",
    ],
    keyPhrases: [
      "My client has the right to feel…",
      "These expectations can be harmful.",
      "Emotions are human.",
      "Let's look at the impact.",
    ],
    remember: "Be firm, calm, and respectful.",
    colorClass: "bg-role-defense",
    borderColorClass: "border-role-defense-light",
  },
  {
    role: "WITNESS",
    emoji: "🧓",
    subtitle: "(You come when called)",
    whoYouAre: "Someone with a related experience or observation.",
    yourJob: [
      "Share a short story",
      "Support one side",
      "Add real-life context",
    ],
    keyPhrases: [
      "In my experience…",
      "I once saw…",
      "This reminds me of…",
    ],
    remember: "Keep it short (1–2 minutes).",
    colorClass: "bg-role-witness",
    borderColorClass: "border-role-witness-light",
  },
  {
    role: "PUBLIC / AUDIENCE",
    emoji: "👥",
    subtitle: "(You are watching)",
    whoYouAre: "Observers representing the wider community.",
    yourJob: [
      "Listen carefully",
      "Notice what feels fair or unfair",
      "Share reflections at the end",
    ],
    keyPhrases: [
      "This made me think…",
      "I've seen this happen too.",
      "This feels unfair because…",
    ],
    remember: "You reflect — you don't decide.",
    colorClass: "bg-role-public",
    borderColorClass: "border-role-public-light",
  },
];
