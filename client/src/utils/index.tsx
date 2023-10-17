import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = (prompt: string): string => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  // recursive solution
  if (prompt === randomPrompt) return getRandomPrompt(prompt);

  // iterative solution
  // while (prompt === randomPrompt) {
  //   randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  //   randomPrompt = surpriseMePrompts[randomIndex];
  // }
  return randomPrompt;
};
