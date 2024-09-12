export interface Testimonials {
  id: number;
  img: string;
  name: string;
  position: string;
  textsOne: string;
  textsTwo: string;
  header: string;
  stars: number;
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
  index?: number;
}
