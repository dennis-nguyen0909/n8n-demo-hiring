import { Module } from '@nestjs/common';
import { RecruitmentNewsController } from './recruitment-news.controller';
import { RecruitmentNewsService } from './recruitment-news.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RecruitmentNews,
  RecruitmentNewsSchema,
} from './schemas/recruitment-news.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RecruitmentNews.name, schema: RecruitmentNewsSchema },
    ]),
  ],
  controllers: [RecruitmentNewsController],
  providers: [RecruitmentNewsService],
  exports: [RecruitmentNewsService],
})
export class RecruitmentNewsModule {}
