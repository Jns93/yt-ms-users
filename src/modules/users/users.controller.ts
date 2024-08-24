import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiDocGenericPost } from "src/app/common/api-doc-generic-post.decorator";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {

    }

    @Post()
    @ApiDocGenericPost('create-user', CreateUserDto)
    async create(@Body() body: CreateUserDto) {
        return await this.usersService.create(body);
    }

    @Get()
    async findAll() {
        return await this.usersService.findAll();
    }
    

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateDto: UpdateUserDto) {
        return await this.usersService.update(id, updateDto);
    }
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.usersService.delete(id);
    }
}