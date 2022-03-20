import { Check, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoriesEntity } from './../categories/categories.entity';
import { GendersEntity } from './../genders/genders.entity';
import { LanguagesEntity } from './../languages/languages.entity';
import { ReportsEntity } from './../reports/reports.entity';
import { ServicesEntity } from './../services/services.entity';



@Entity('users')
@Check(`"birthday">1900`)
@Check(`"birthday"<2100`)
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => GendersEntity, genders => genders.users_interested_in_gender)
    interested_in_gender: GendersEntity;

    @ManyToOne(type => GendersEntity, genders => genders.users_gender)
    gender: GendersEntity;

    @ManyToOne(type => LanguagesEntity, languages => languages.users)
    languages: LanguagesEntity;

    @ManyToOne(type => CategoriesEntity, categories => categories.users)
    category: CategoriesEntity;

    @ManyToOne(type => ServicesEntity, services => services.users)
    service: ServicesEntity;

    @OneToMany(type => ReportsEntity, reports => reports.user_send, { onDelete: 'CASCADE', cascade: true })
    reports_send: ReportsEntity[];

    @OneToMany(type => ReportsEntity, reports => reports.user_receive, { onDelete: 'CASCADE', cascade: true })
    reports_receive: ReportsEntity[];

    @ManyToMany(type => UserEntity)
    @JoinTable()
    friends: UserEntity[]

    @Column({ type: 'int', width: 4 })
    birthday: number;

    @Column({ type: 'varchar', length: 200 })
    bio: string;

    @Column('varchar')
    image_link: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}