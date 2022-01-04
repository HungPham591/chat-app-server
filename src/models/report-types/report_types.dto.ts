import { ReportsRO } from './../reports/reports.dto';
import { BlockUsersRO } from './../block-users/block_users.dto';

export class ReportTypesDTO {

}
export class ReportTypesRO {
    id: string;
    name: string;
    users: [BlockUsersRO];
    reports: [ReportsRO];
    code: number;
    created: Date;
}