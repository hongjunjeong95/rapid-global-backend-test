import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //프록시 처리
  @Get()
  proxy() {
    return this.appService.proxy();
  }

  @Get('challenge1')
  challenge1(@Query('categoryKeyword') categoryKeyword: string) {
    return this.appService.challenge1(categoryKeyword);
  }

  @Get('challenge2')
  challenge2() {
    return this.appService.challenge2();
  }
}
