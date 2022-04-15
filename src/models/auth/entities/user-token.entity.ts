import { AccountType, Role } from './../../../utils/Interface';
export class UserToken {
    id?: string;
    type?: AccountType;
    roles?: Role;
}