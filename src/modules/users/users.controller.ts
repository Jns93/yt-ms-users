import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {

    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }
    
    @Post()
    @ApiResponse({ description: `Ola`})
    create(@Body() body: CreateUserDto) {
        return this.usersService.create(body);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDto: UpdateUserDto) {
        return this.usersService.update(id, updateDto);
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }
}