import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    findAll() {
        return ["Jonas", "Luiz"];
    }
    create() {
        return "Usuario criado";
    }
}