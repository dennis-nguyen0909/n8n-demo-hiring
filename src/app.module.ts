import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecruitmentNewsModule } from './recruitment-news/recruitment-news.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/recruitment-news'),
    RecruitmentNewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
