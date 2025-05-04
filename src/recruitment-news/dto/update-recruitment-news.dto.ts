import { PartialType } from '@nestjs/swagger';
import { CreateRecruitmentNewsDto } from './create-recruitment-news.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdateRecruitmentNewsDto extends PartialType(
  CreateRecruitmentNewsDto,
) {}
