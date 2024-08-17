import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./repositories/users.repository";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { PrismaService } from "../global/prisma/prisma.service";

@Injectable()
export class UsersService {
    
    constructor(private readonly repository: UsersRepository) {

    }
    async findAll() {
        return await this.repository.findAll();
    }
    async create(user: CreateUserDto) {
        return await this.repository.create(user);
    }
    async update(id: string, updateDto: UpdateUserDto) {
        return await this.repository.updateUserById(id, updateDto);
    }
    async delete(id: string) {
        return await this.repository.deleteUserById(id);
    }
}