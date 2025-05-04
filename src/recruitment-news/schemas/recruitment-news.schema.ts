import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type RecruitmentNewsDocument = RecruitmentNews &
  Document<Types.ObjectId>;

@Schema({ timestamps: true })
export class RecruitmentNews {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  companyName!: string;

  @Prop({ required: true })
  description!: string;

  @Prop({ required: true, type: [String] })
  requirements!: string[];

  @Prop({ required: true, type: [String] })
  benefits!: string[];

  @Prop({ required: true })
  salary!: string;

  @Prop({ required: true })
  location!: string;

  @Prop({ required: true })
  jobType!: string;

  @Prop({ required: true })
  experienceLevel!: string;

  @Prop({ required: true, type: [String] })
  skills!: string[];

  @Prop({ required: true })
  deadline!: Date;

  @Prop({ required: true })
  companyLogo!: string;

  @Prop({ required: true })
  contactEmail!: string;

  @Prop({ required: true })
  contactPhone!: string;

  @Prop({ required: true, default: Date.now })
  datePosted!: Date;

  @Prop({ required: true })
  organization!: string;

  @Prop()
  organizationUrl?: string;

  @Prop()
  linkedinUrl?: string;

  @Prop({ default: true })
  isActive!: boolean;
}

export const RecruitmentNewsSchema =
  SchemaFactory.createForClass(RecruitmentNews);
