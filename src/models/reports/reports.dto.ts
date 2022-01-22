import { UsersRO } from './../users/users.dto';
import { ReportTypesRO } from './../report-types/report_types.dto';
import { IsUUID } from 'class-validator';

export class ReportsDTO {
    @IsUUID()
    type: ReportTypesRO;
    @IsUUID()
    user_send: UsersRO;
    @IsUUID()
    user_receive: UsersRO;
}
export interface ReportsRO {
    id?: string;
    type?: ReportTypesRO;
    user_send?: UsersRO;
    user_receive?: UsersRO;
    createdAt?: Date;
}