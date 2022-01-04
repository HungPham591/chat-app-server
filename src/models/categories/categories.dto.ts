import { UsersRO } from './../users/users.dto';

export class CategoriesDTO {

}
export class CategoriesRO {
    id: string;
    code: number;
    name: string;
    description: string;
    users: UsersRO;
    created: Date;
}