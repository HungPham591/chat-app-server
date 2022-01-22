import { ReportsRO } from './../reports/reports.dto';
import { BlockUsersRO } from './../block-users/block_users.dto';
import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class ReportTypesDTO {
    @IsNotEmpty()
    @IsString()
    name: string;
}
export interface ReportTypesRO {
    id?: string;
    name?: string;
    users?: BlockUsersRO[];
    reports?: ReportsRO[];
    code?: number;
    createdAt?: Date;
    deletedAt?: Date;
}