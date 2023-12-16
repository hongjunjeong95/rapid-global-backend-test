import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { OptionList, TranslateWordList } from './app.data';
import { AppUtilityService } from './app-utility.service';

@Injectable()
export class AppService {
  constructor(
    private readonly appRepository: AppRepository,
    private readonly appUtilityService: AppUtilityService,
  ) {}

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

  public challenge1(categoryKeyword: string) {
    const category = this.appRepository.findCategoryOrThrow(categoryKeyword);
    const product = this.appRepository.findProductOrThrow(categoryKeyword);

    return {
      product: {
        name: product.name,
        category: {
          id: category.id,
          name: category.name,
        },
      },
    };
  }

  /**
   * 코딩 테스트 - 2: 단어 치환
   *
   * 목표
   * 옵션 이름에 나타난 특정 단어들을 주어진 단어 치환 목록을 사용하여 변경합니다.
   */

  public challenge2() {
    const translationsMap =
      this.appUtilityService.convertTranslationListToMap(TranslateWordList);
    const regex = this.appUtilityService.createRegex(TranslateWordList);

    return OptionList.map((option) => ({
      ...option,
      name: this.appUtilityService.replaceName(
        regex,
        option.name,
        translationsMap,
      ),
    }));
  }
}
