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
  @IsOptional()
  requirements?: string[];

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  benefits?: string[];

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
  @IsOptional()
  skills?: string[];

  @IsDateString()
  @IsNotEmpty()
  deadline: Date;

  @IsString()
  @IsNotEmpty()
  companyLogo: string;

  @IsOptional()
  contactEmail: string;

  @IsOptional()
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
