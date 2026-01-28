export interface FlashcardData {
  role: string;
  emoji: string;
  subtitle: string;
  whoYouAre: string;
  yourJob: string;
  keyPhrases: string[];
  remember: string;
  colorClass: string;
  borderColorClass: string;
}

export const flashcardsData: FlashcardData[] = [
  {
    role: "JUDGE/JURY",
    emoji: "👩‍⚖️",
    subtitle: "The neutral leader who keeps things fair and makes final decisions",
    whoYouAre: "The neutral leader who keeps things fair and makes final decisions",
    yourJob: "Listen to everyone, ask questions, keep order, decide if emotion rules are fair",
    keyPhrases: [
      "Order in the court!",
      "Can you explain that more?",
      "What evidence supports this?",
      "I've heard both sides, here's my decision...",
    ],
    remember: "Stay neutral until the end, give everyone a chance to speak",
    colorClass: "bg-role-judge",
    borderColorClass: "border-role-judge-light",
  },
  {
    role: "THE ACCUSED",
    emoji: "😔",
    subtitle: "The person whose emotions were judged by society",
    whoYouAre: "The person whose emotions were judged by society",
    yourJob: "Tell your story honestly, explain how you felt, show you're human",
    keyPhrases: [
      "This is what really happened...",
      "I felt [emotion] because...",
      "When people said that, it made me feel...",
      "I just wanted to be myself",
    ],
    remember: "Be vulnerable but strong, help people understand your experience",
    colorClass: "bg-role-accused",
    borderColorClass: "border-role-accused-light",
  },
  {
    role: "PROSECUTOR (SOCIETY)",
    emoji: "👨‍💼",
    subtitle: "You represent society's traditional rules about emotions",
    whoYouAre: "You represent society's traditional rules about emotions",
    yourJob: "Explain why society has these emotion rules, argue they exist for good reasons",
    keyPhrases: [
      "Society expects...",
      "This behavior is inappropriate because...",
      "We have these rules to maintain order",
      "What example does this set?",
    ],
    remember: "You're not the villain - you're showing society's perspective",
    colorClass: "bg-role-prosecutor",
    borderColorClass: "border-role-prosecutor-light",
  },
  {
    role: "DEFENSE LAWYER",
    emoji: "🧑‍⚖️",
    subtitle: "You defend the accused person's right to express emotions",
    whoYouAre: "You defend the accused person's right to express emotions",
    yourJob: "Argue that emotions are natural, challenge unfair rules, protect your client",
    keyPhrases: [
      "My client has the right to feel...",
      "These rules are outdated and harmful",
      "Let me show you evidence that...",
      "Emotions don't have gender",
    ],
    remember: "Be passionate but respectful, use examples and evidence",
    colorClass: "bg-role-defense",
    borderColorClass: "border-role-defense-light",
  },
  {
    role: "WITNESS",
    emoji: "🧓",
    subtitle: "Someone who has seen or experienced similar situations",
    whoYouAre: "Someone who has seen or experienced similar situations",
    yourJob: "Share a brief story (real or imagined) that supports one side",
    keyPhrases: [
      "I once saw...",
      "In my experience...",
      "This reminds me of when...",
      "I think this matters because...",
    ],
    remember: "Keep stories short (1-2 minutes), be clear which side you support",
    colorClass: "bg-role-witness",
    borderColorClass: "border-role-witness-light",
  },
  {
    role: "PUBLIC/AUDIENCE",
    emoji: "👥",
    subtitle: "Citizens watching the trial, representing broader society",
    whoYouAre: "Citizens watching the trial, representing broader society",
    yourJob: "Listen actively, react appropriately, participate in final reflection",
    keyPhrases: [
      "I agree with...",
      "That's interesting because...",
      "I've seen this too",
      "This makes me think...",
    ],
    remember: "Your reactions matter, be engaged and thoughtful",
    colorClass: "bg-role-public",
    borderColorClass: "border-role-public-light",
  },
];
