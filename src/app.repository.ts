import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoryList, ProductList } from './app.data';

@Injectable()
export class AppRepository {
  public findCategoryOrThrow(categoryKeyword: string) {
    for (const category of CategoryList) {
      if (category.name === categoryKeyword) {
        return category;
      }
    }

    throw new BadRequestException("category doesn't exist");
  }

  public findProductOrThrow(categoryName: string) {
    for (const product of ProductList) {
      if (categoryName === product.keyword) {
        return product;
      }
    }

    throw new BadRequestException("product doesn't exist");
  }
}
