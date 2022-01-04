import { UsersRO } from './../users/users.dto';

export class GendersDTO {

}
export class GendersRO {
    id: string;
    name: string;
    code: number;
    users_gender: [UsersRO];
    users_interested_in_gender: [UsersRO];
    created: Date;
}