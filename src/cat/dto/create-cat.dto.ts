import { ApiProperty } from "@nestjs/swagger";
import {IsString, IsDateString, IsNotEmpty, IsOptional } from "class-validator";
export class CreateCatDto {
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: "Bob", description: "Name of cat"})
    name: string;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({example: "04-03-2007", description: "Cat's date of birth"})
    dateOfBirth: Date;

    @ApiProperty({example: "He loves cheese", description: "Additional info about cat", required: false})
    @IsOptional()
    additionalInfo?: string;
}

