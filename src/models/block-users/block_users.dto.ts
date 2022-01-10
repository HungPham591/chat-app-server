import { ReportTypesRO } from './../report-types/report_types.dto';
import { UsersRO } from './../users/users.dto';
import { IsUUID } from 'class-validator'

export class BlockUsersDTO {
    @IsUUID()
    user: UsersRO;
    @IsUUID()
    type: ReportTypesRO;
}
export interface BlockUsersRO {
    id?: string;
    user?: UsersRO;
    type?: ReportTypesRO;
    created?: Date;
}