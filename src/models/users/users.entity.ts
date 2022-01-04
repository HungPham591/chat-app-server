import { ReportsEntity } from './../reports/reports.entity';
import { BlockUserEntity } from './../block-users/block_users.entity';
import { ServicesEntity } from './../services/services.entity';
import { LanguagesEntity } from './../languages/languages.entity';
import { CategoriesEntity } from './../categories/categories.entity';
import { GendersEntity } from './../genders/genders.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, ManyToMany, JoinTable, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { report } from 'process';


@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @ManyToOne(type => GendersEntity, genders => genders.users_interested_in_gender) interested_in_gender: GendersEntity;
    @ManyToOne(type => GendersEntity, genders => genders.users_gender) gender: GendersEntity;
    @ManyToMany(type => CategoriesEntity, categories => categories.users) @JoinTable() categories: [CategoriesEntity];
    @ManyToOne(type => LanguagesEntity, languages => languages.users) languages: LanguagesEntity;
    @ManyToOne(type => ServicesEntity, services => services.users) service: ServicesEntity;
    @OneToOne(type => BlockUserEntity) @JoinColumn() block: BlockUserEntity;
    @OneToMany(type => ReportsEntity, reports => reports.user_send) reports_send: [ReportsEntity];
    @OneToMany(type => ReportsEntity, reports => reports.user_receive) reports_receive: [ReportsEntity];
    @Column({ type: 'varchar', unique: true }) social_code: string;
    @Column({ type: 'int', width: 4 }) birthday: number;
    @Column({ type: 'varchar', length: 200 }) status: string;
    @Column('varchar') image_link: string;
    @Column('boolean') active: boolean;
    @CreateDateColumn() created: Date;
}