import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./repositories/users.repository";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { PubSubService } from "../global/pubsub/pubsub.service";

@Injectable()
export class UsersService {

    constructor(
        private readonly repository: UsersRepository,
        private readonly pubsubService: PubSubService
    ) {

    }
    async findAll() {
        return await this.repository.findAll();
    }
    async create(user: CreateUserDto) {
        const userCreated = await this.repository.create(user);
        await this.pubsubService.publish('user-created', userCreated, 'users');
        return userCreated;
    }
    async update(id: string, updateDto: UpdateUserDto) {
        return await this.repository.updateUserById(id, updateDto);
    }
    async delete(id: string) {
        return await this.repository.deleteUserById(id);
    }
}