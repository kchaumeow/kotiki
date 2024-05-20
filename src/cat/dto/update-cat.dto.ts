import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCatDto extends PartialType(CreateCatDto) {
    @IsString()
    @IsOptional()
    @ApiProperty({example: "Bob", description: "Name of cat", required: false})
    name: string;

    @IsOptional()
    @IsDateString()
    @ApiProperty({example: "04-03-2007", description: "Cat's date of birth", required: false})
    dateOfBirth: Date;

    @ApiProperty({example: "He loves cheese", description: "Additional info about cat", required: false})
    @IsOptional()
    additionalInfo?: string;
}
