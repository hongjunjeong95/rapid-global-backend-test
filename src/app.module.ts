import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';
import { AppUtilityService } from './app-utility.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppRepository, AppUtilityService],
})
export class AppModule {}
