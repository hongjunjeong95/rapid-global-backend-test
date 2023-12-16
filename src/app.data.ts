export const CategoryList = [
  { id: 1, name: '가구' },
  { id: 2, name: '공구' },
  { id: 3, name: '의류' },
  ...[...new Array(1000)].map((_, index) => ({
    id: index + 4,
    name: `카테고리${index + 4}`,
  })),
];

export const ProductList = [
  { id: 1, name: '의자', keyword: '가구' },
  { id: 2, name: '망치', keyword: '공구' },
  { id: 3, name: '검은 티셔츠', keyword: '의류' },
  ...[...new Array(1000)].map((_, index) => ({
    id: index + 4,
    name: `상품${index + 4}`,
    keyword: `카테고리${index + 4}`,
  })),
];

export const OptionList = [
  { id: 1, name: '블랙 XL' },
  { id: 2, name: '블랙 L' },
  { id: 3, name: '블랙 M' },
  { id: 4, name: '레드 XL' },
  { id: 5, name: '레드 L' },
  { id: 6, name: '레드 M' },
  ...[...new Array(1000)].map((_, index) => ({
    id: index + 7,
    name: `블랙${index + 7}`,
  })),
];

export type Translation = {
  src: string;
  dest: string;
};

export const TranslateWordList: Translation[] = [
  { src: '블랙', dest: '검정색' },
  { src: '레드', dest: '빨간색' },
  ...[...new Array(1000)].map((_, index) => ({
    src: index.toString(),
    dest: `A`,
  })),
];
