import {
  IsString,
  IsArray,
  IsDate,
  IsEmail,
  IsPhoneNumber,
  IsBoolean,
  IsOptional,
  IsNotEmpty,
  IsDateString,
  IsUrl,
} from 'class-validator';

export class CreateRecruitmentNewsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  requirements: string[];

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  benefits: string[];

  @IsString()
  @IsNotEmpty()
  salary: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  jobType: string;

  @IsString()
  @IsNotEmpty()
  experienceLevel: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  skills: string[];

  @IsDateString()
  @IsNotEmpty()
  deadline: Date;

  @IsString()
  @IsNotEmpty()
  companyLogo: string;

  @IsEmail()
  @IsNotEmpty()
  contactEmail: string;

  @IsNotEmpty()
  contactPhone: string;

  @IsDateString()
  @IsOptional()
  datePosted?: Date;

  @IsString()
  @IsNotEmpty()
  organization: string;

  @IsUrl()
  @IsOptional()
  organizationUrl?: string;

  @IsUrl()
  @IsOptional()
  linkedinUrl?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
