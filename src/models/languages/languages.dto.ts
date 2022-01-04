import { UsersRO } from './../users/users.dto';

export class LanguagesDTO {

}
export class LanguagesRO {
    id: string;
    users: [UsersRO];
    code: number;
    name: string;
    created: Date;
}