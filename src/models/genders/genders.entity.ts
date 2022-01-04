import { UserEntity } from './../users/users.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";


@Entity('genders')
export class GendersEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column({ type: 'varchar', length: 12 }) name: string;
    @Column('int') code: number;
    @OneToMany(type => UserEntity, users => users.gender) users_gender: [UserEntity];
    @OneToMany(type => UserEntity, users => users.interested_in_gender) users_interested_in_gender: [UserEntity];
    @CreateDateColumn() created: Date;
}