import { UserEntity } from './../users/users.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";

@Entity('languages')
export class LanguagesEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @OneToMany(type => UserEntity, users => users.languages) users: [UserEntity];
    @Column('int') code: number;
    @Column({ type: 'varchar', length: 60 }) name: string;
    @CreateDateColumn() created: Date;
}