import { ReportsRO } from './../reports/reports.dto';
import { ServicesRO } from './../services/services.dto';
import { LanguagesRO } from './../languages/languages.dto';
import { GendersRO } from './../genders/genders.dto';
import { IsNotEmpty, IsUUID, IsString, IsInt, Min } from 'class-validator';

export class UsersDTO {
    @IsUUID()
    interested_in_gender: GendersRO;
    @IsUUID()
    gender: GendersRO;
    @IsUUID()
    languages: LanguagesRO;
    @IsInt()
    @Min(1900)
    birthday: number;
    @IsString()
    bio: string;
    @IsString()
    @IsNotEmpty()
    image_link: string
}
export interface UsersRO {
    id?: string;
    interested_in_gender?: GendersRO;
    gender?: GendersRO;
    languages?: LanguagesRO;
    service?: ServicesRO;
    reports_send?: ReportsRO[];
    reports_receive?: ReportsRO[];
    friends?: UsersRO[];
    birthday?: number;
    bio?: string;
    image_link?: string;
    createdAt?: Date;
    deletedAt?: Date;
}