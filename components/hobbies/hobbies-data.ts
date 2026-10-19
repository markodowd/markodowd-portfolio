export interface Hobby {
  name: string;
  description: string;
  image: string;
  link?: string;
}

export const hobbies: Hobby[] = [
  {
    name: "Ju-Jitsu",
    description: "I have been training in Ju-Jitsu (Japanese) under the World Ju-Jitsu Federation Ireland since 2012. After many years of dedication and discipline I have earned and been recognised as a 1st degree Black Belt (1st Dan)",
    image: "/images/hobbies/jujitsu.webp",
  },
  {
    name: "Music & Instruments",
    description: "I have been playing guitar for over 25 years and more recently Irish tenor banjo. I play in traditional sessions which I enjoy for both the performance aspect and social camaraderie that comes with it",
    image: "/images/hobbies/banjo.webp",
    link: "https://www.youtube.com/@MarkODowd-IrishTenorBanjo",
  },
  {
    name: "Chess",
    description: "I enjoy the strategic depth and mental challenge of chess. I play on Lichess, which I use because of its open source nature. I'm open to friendly challenges!",
    image: "/images/hobbies/chess.webp",
    link: "https://lichess.org/@/modowd91",
  },
];

