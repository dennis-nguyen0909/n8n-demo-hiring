import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  RecruitmentNews,
  RecruitmentNewsDocument,
} from './schemas/recruitment-news.schema';
import { CreateRecruitmentNewsDto } from './dto/create-recruitment-news.dto';
import { UpdateRecruitmentNewsDto } from './dto/update-recruitment-news.dto';

@Injectable()
export class RecruitmentNewsService {
  constructor(
    @InjectModel(RecruitmentNews.name)
    private recruitmentNewsModel: Model<RecruitmentNewsDocument>,
  ) {}

  async create(
    createRecruitmentNewsDto: CreateRecruitmentNewsDto,
  ): Promise<RecruitmentNews> {
    const createdRecruitmentNews = new this.recruitmentNewsModel(
      createRecruitmentNewsDto,
    );
    return createdRecruitmentNews.save();
  }

  async findAll(
    page = 1,
    limit = 10,
  ): Promise<{
    data: RecruitmentNews[];
    total: number;
    page: number;
    limit: number;
  }> {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.recruitmentNewsModel.find().skip(skip).limit(limit).exec(),
      this.recruitmentNewsModel.countDocuments().exec(),
    ]);

    return {
      data,
      total,
      page,
      limit,
    };
  }

  async findOne(id: string): Promise<RecruitmentNews> {
    const recruitmentNews = await this.recruitmentNewsModel.findById(id).exec();
    if (!recruitmentNews) {
      throw new NotFoundException('Recruitment news not found');
    }
    return recruitmentNews;
  }

  async update(
    id: string,
    updateRecruitmentNewsDto: UpdateRecruitmentNewsDto,
  ): Promise<RecruitmentNews> {
    const updatedRecruitmentNews = await this.recruitmentNewsModel
      .findByIdAndUpdate(id, updateRecruitmentNewsDto, { new: true })
      .exec();

    if (!updatedRecruitmentNews) {
      throw new NotFoundException('Recruitment news not found');
    }
    return updatedRecruitmentNews;
  }

  async remove(id: string): Promise<RecruitmentNews> {
    const deletedRecruitmentNews = await this.recruitmentNewsModel
      .findByIdAndDelete(id)
      .exec();

    if (!deletedRecruitmentNews) {
      throw new NotFoundException('Recruitment news not found');
    }
    return deletedRecruitmentNews;
  }

  async search(query: string): Promise<RecruitmentNews[]> {
    return this.recruitmentNewsModel
      .find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { companyName: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { skills: { $regex: query, $options: 'i' } },
        ],
      })
      .exec();
  }
}
