import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from './../users/users.entity';

@Entity('languages')
export class LanguagesEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(type => UserEntity, users => users.languages)
    users: UserEntity[];

    @Column({ type: 'int', unique: true })
    @Generated('increment')
    code: number;

    @Column({ type: 'varchar', length: 60 })
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}