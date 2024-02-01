export interface mainShowcase {
  title: {
    en: string;
    geo?: string;
  };
  paragraph: string;
  image: any;
  ctaText: string;
  titleColoredWords: string;
  showcaseKeyWords: { en: string; nor?: string; geo?: string }[];
}
