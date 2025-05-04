import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecruitmentNewsModule } from './recruitment-news/recruitment-news.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://duyxitrum000:minhduy09092003@cluster0.e8njous.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    RecruitmentNewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
