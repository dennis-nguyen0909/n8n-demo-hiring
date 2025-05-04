import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RecruitmentNewsService } from './recruitment-news.service';
import { CreateRecruitmentNewsDto } from './dto/create-recruitment-news.dto';
import { UpdateRecruitmentNewsDto } from './dto/update-recruitment-news.dto';

@Controller('recruitment-news')
export class RecruitmentNewsController {
  constructor(
    private readonly recruitmentNewsService: RecruitmentNewsService,
  ) {}

  @Post()
  create(@Body() createRecruitmentNewsDto: CreateRecruitmentNewsDto) {
    console.log('createRecruitmentNewsDto', createRecruitmentNewsDto);
    return this.recruitmentNewsService.create(createRecruitmentNewsDto);
  }

  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.recruitmentNewsService.findAll(
      parseInt(page, 10),
      parseInt(limit, 10),
    );
  }

  @Get('search')
  search(@Query('q') query: string) {
    return this.recruitmentNewsService.search(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recruitmentNewsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecruitmentNewsDto: UpdateRecruitmentNewsDto,
  ) {
    return this.recruitmentNewsService.update(id, updateRecruitmentNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recruitmentNewsService.remove(id);
  }
}
