import { ReportsRO } from './../reports/reports.dto';
import { ServicesRO } from './../services/services.dto';
import { LanguagesRO } from './../languages/languages.dto';
import { CategoriesRO } from './../categories/categories.dto';
import { GendersRO } from './../genders/genders.dto';
import { BlockUsersRO } from '../block-users/block_users.dto';
import { IsNotEmpty, IsUUID, IsString, IsInt, Min, Max, IsBoolean } from 'class-validator';

export class UsersDTO {
    @IsUUID()
    interested_in_gender: GendersRO;
    @IsUUID()
    gender: GendersRO;
    categories?: CategoriesRO[];
    @IsUUID()
    languages: LanguagesRO;
    @IsNotEmpty()
    @IsString()
    social_code: string;
    @IsInt()
    @Min(1900)
    birthday: number;
    @IsString()
    status: string;
}
export interface UsersRO {
    id?: string;
    interested_in_gender?: GendersRO;
    gender?: GendersRO;
    categories?: CategoriesRO[];
    languages?: LanguagesRO;
    service?: ServicesRO;
    block?: BlockUsersRO;
    reports_send?: ReportsRO[];
    reports_receive?: ReportsRO[];
    social_code?: string;
    birthday?: number;
    status?: string;
    image_link?: string;
    active?: boolean;
    created?: Date;
    deleteAt?: Date;
}