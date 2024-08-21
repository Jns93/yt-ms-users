import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @ApiProperty({
        description: 'Name of user',
        example: 'Joao'
    })
    name: string;
    @ApiProperty({
        description: 'user email',
        example: 'email@email.com'
    })
    @IsEmail()
    email: string;
}