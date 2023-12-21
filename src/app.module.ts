import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';
import { AppUtilityService } from './app-utility.service';
import { ReverseProxyMiddleware } from './proxy.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppRepository, AppUtilityService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ReverseProxyMiddleware)
      .forRoutes({ path: '/proxy/*', method: RequestMethod.ALL });
  }
}
