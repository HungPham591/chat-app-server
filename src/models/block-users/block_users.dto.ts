import { ReportTypesRO } from './../report-types/report_types.dto';
import { UsersRO } from './../users/users.dto';

export class BlockUsersDTO {

}
export class BlockUsersRO {
    id: string;
    user: UsersRO;
    type: ReportTypesRO;
    created: Date;
}