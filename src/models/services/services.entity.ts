import { UserEntity } from './../users/users.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, Generated, DeleteDateColumn } from "typeorm";

@Entity('services')
export class ServicesEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(type => UserEntity, users => users.service)
    users: UserEntity[];

    @Column({ type: 'int', unique: true })
    @Generated('increment')
    code: number;

    @Column({ type: 'varchar', length: 60 })
    title: string;

    @Column({ type: 'varchar', length: 200 })
    description: string;

    @Column('numeric')
    price: number;

    @CreateDateColumn()
    created: Date;

    @DeleteDateColumn()
    deleteAt?: Date;
}