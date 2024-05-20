import { Column, DataType, Model, NotNull, Table } from "sequelize-typescript";
import { CreateCatDto } from "../dto/create-cat.dto";
import { ApiProperty } from "@nestjs/swagger";

@Table({tableName: "cats"})
export class Cat extends Model<Cat, CreateCatDto> {
    @ApiProperty({example: 1, description: "UUID of cat"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "Bob", description: "UUID of cat"})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: "04-03-2007", description: "Cat's date of birth"})
    @Column({type: DataType.DATE, allowNull: false})
    dateOfBirth: Date;

    @ApiProperty({example: "He loves cheese", description: "Additional info about cat"})
    @Column({type: DataType.TEXT})
    additionalInfo: string;
}
