import { ReportsEntity } from './../reports/reports.entity';
import { BlockUserEntity } from './../block-users/block_users.entity';
import { ServicesEntity } from './../services/services.entity';
import { LanguagesEntity } from './../languages/languages.entity';
import { CategoriesEntity } from './../categories/categories.entity';
import { GendersEntity } from './../genders/genders.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, ManyToMany, JoinTable, OneToOne, JoinColumn, OneToMany, DeleteDateColumn, Check } from "typeorm";



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

    @ManyToMany(type => CategoriesEntity, categories => categories.users)
    @JoinTable()
    categories: CategoriesEntity[];

    @ManyToOne(type => LanguagesEntity, languages => languages.users)
    languages: LanguagesEntity;

    @ManyToOne(type => ServicesEntity, services => services.users)
    service: ServicesEntity;

    @OneToOne(type => BlockUserEntity, { onDelete: 'CASCADE', cascade: true })
    @JoinColumn()
    block: BlockUserEntity;

    @OneToMany(type => ReportsEntity, reports => reports.user_send, { onDelete: 'CASCADE', cascade: true })
    reports_send: ReportsEntity[];

    @OneToMany(type => ReportsEntity, reports => reports.user_receive, { onDelete: 'CASCADE', cascade: true })
    reports_receive: ReportsEntity[];

    @ManyToMany(type => UserEntity)
    @JoinTable()
    friends: UserEntity[]

    @Column({ type: 'varchar', unique: true })
    social_code: string;

    @Column({ type: 'int', width: 4 })
    birthday: number;

    @Column({ type: 'varchar', length: 200 })
    status: string;

    @Column('varchar')
    image_link: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}