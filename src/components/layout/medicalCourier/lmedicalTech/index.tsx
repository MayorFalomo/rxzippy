export interface IProps {
  id: number;
  title: string;
  description: string;
}

export const FAQS: IProps[] = [
  {
    id: 1,
    title: "Real-Time Tracking",
    description: "Our system allows you to track your progress in real-time.",
  },
  {
    id: 2,
    title: "Online order Submission",
    description:
      "Our system generates automated reports to help you stay on top of your work.",
  },
  {
    id: 3,
    title: "Direct Signatures",
    description:
      "Our system allows you to collect direct signatures from your team members.",
  },
];
