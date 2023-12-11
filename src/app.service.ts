import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  proxy() {
    //API 호출
    return true;
  }

  /**
   * 코딩 테스트 - 1: 상품 카테고리 매칭
   *
   * 목표
   * 상품을 수집할 때 제공된 키워드를 기반으로 카테고리 목록과 매칭하여 상품에 카테고리 정보를 연결하는 프로세스를 구현합니다.
   */

  private categoryList = [
    { id: 1, name: '가구' },
    { id: 2, name: '공구' },
    { id: 3, name: '의류' },
    ...[...new Array(1000)].map((_, index) => ({
      id: index + 4,
      name: `카테고리${index + 4}`,
    })),
  ];

  public challenge1() {
    //함수 실행 시간 반환

    const start = Date.now();

    const product = {
      id: 1,
      name: '의자',
      keyword: '가구',
    };

    const end = Date.now();
    // return end - start;
    return this.categoryList.slice(0, 100);
  }

  /**
   * 코딩 테스트 - 2: 단어 치환
   *
   * 목표
   * 옵션 이름에 나타난 특정 단어들을 주어진 단어 치환 목록을 사용하여 변경합니다.
   */

  private translateWordList: Translation[] = [
    { src: '블랙', dest: '검정색' },
    { src: '레드', dest: '빨간색' },
    ...[...new Array(1000)].map((_, index) => ({
      src: index.toString(),
      dest: `A`,
    })),
  ];

  private optionList = [
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

  private createRegex = (translations: Translation[]): RegExp => {
    const pattern = translations
      .map((translation) => translation.src)
      .join('|');
    return new RegExp(pattern, 'g');
  };

  private replaceName(
    regex: RegExp,
    name: string,
    translationsMap: Record<string, string>,
  ): string {
    return name.replace(regex, (match) => translationsMap[match]);
  }

  private convertTranslationListToMap(
    translateWordList: Translation[],
  ): Record<string, string> {
    return translateWordList.reduce(
      (
        map: {
          [key: string]: string;
        },
        translation,
      ) => {
        map[translation.src] = translation.dest;
        return map;
      },
      {},
    );
  }

  public challenge2() {
    const translationsMap = this.convertTranslationListToMap(
      this.translateWordList,
    );
    const regex = this.createRegex(this.translateWordList);

    return this.optionList.map((option) => ({
      ...option,
      name: this.replaceName(regex, option.name, translationsMap),
    }));
  }
}

interface Translation {
  src: string;
  dest: string;
}
