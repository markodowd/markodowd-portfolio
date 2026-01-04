export interface Hobby {
  name: string;
  description: string;
  image: string;
  link?: string;
}

export const hobbies: Hobby[] = [
  {
    name: "Ju-Jitsu",
    description: "I've been training in Ju-Jitsu (Japanese) under the World Ju-Jitsu Federation Ireland for almost a decade now. I'm aiming to earn a black belt soon which will represent years of dedication and discipline being recognised",
    image: "/images/hobbies/jujitsu.webp",
  },
  {
    name: "Music & Instruments",
    description: "I've been playing guitar for more than 25 years and Irish banjo more recently. I play in traditional Irish sessions, which I enjoy for both the performance aspect and the social nature of the gatherings.",
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

