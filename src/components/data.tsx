export const subjects = [
  {
    name: "Physics",
    chapters: [
      "Light - Reflection and Refraction",
      "Electricity",
      "The Human Eye and the Colourful World",
      "Magnetic Effects of Electric Current",
      "Laws of Motion",
      "Gravitation",
    ],
  },
  {
    name: "Chemistry",
    chapters: [
      "Acids, bases and salts",
      "Concept of pH scale",
      "Metals and nonmetals",
      "Carbon and its Compounds",
      "Periodic Classification of Elements",
      "Oxidation and reduction",
    ],
  },
  {
    name: "Mathematics",
    chapters: [
      "Polynomials",
      "Relations and Functions",
      "Linear Equations in Two Variables",
      "Trigonometry",
      "Probability",
      "Quadratic Equations",
    ],
  },
  {
    name: "Biology",
    chapters: [
      "Diversity of Living Organisms",
      "Plant Physiology",
      "Evolution",
      "Unit 5: Human",
      "Reproduction",
      "Biotechnology and its Applications",
    ],
  },
  {
    name: "English",
    chapters: [
      "Tenses",
      "Adjectives",
      "Pronouns",
      "Idioms and Phrasal Verbs",
      "Adverbs",
      "Active and Passive Voice",
    ],
  },
  {
    name: "Hindi",
    chapters: [
      "व्याकरण",
      "संज्ञा",
      "सर्वनाम",
      "वर्ण-विचार",
      "कारक",
      "विलोम/विपरीतार्थक शब्द",
    ],
  },
  // Add more subjects and their corresponding chapters
];

const chapterContent: Record<string, string> = {};

subjects.forEach((subject) => {
  subject.chapters.forEach((chapter) => {
    chapterContent[chapter] = `9 + 6 +7x - 2x -3`;
  });
});

export { chapterContent };
