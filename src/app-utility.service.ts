import { Injectable } from '@nestjs/common';
import { Translation } from './app.data';

@Injectable()
export class AppUtilityService {
  public createRegex = (translations: Translation[]): RegExp => {
    const pattern = translations
      .map((translation) => translation.src)
      .join('|');
    return new RegExp(pattern, 'g');
  };

  public replaceName(
    regex: RegExp,
    name: string,
    translationsMap: Record<string, string>,
  ): string {
    return name.replace(regex, (match) => translationsMap[match]);
  }

  public convertTranslationListToMap(
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
}
