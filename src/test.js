const translateWordList = [
  { src: '블랙', dest: '검정색' },
  { src: '레드', dest: '빨간색' },
  ...[...new Array(1000)].map((_, index) => ({
    src: index.toString(),
    dest: `A`,
  })),
];

const optionList = [
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

// 치환 함수 정의
const replaceName = (name, translations) =>
  translations.map((translation) => name.replace(translation.src, translation.dest));

// optionList의 각 요소의 name을 치환
const updatedOptionList = optionList.map((option) => ({
  ...option,
  name: replaceName(option.name, translateWordList).pop(), // 가장 마지막 값만 사용
}));

// 결과 출력
console.log(updatedOptionList);
