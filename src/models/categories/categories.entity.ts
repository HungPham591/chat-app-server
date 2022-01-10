import { UserEntity } from './../users/users.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToMany, JoinTable, Generated, DeleteDateColumn } from "typeorm";

@Entity('categories')
export class CategoriesEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'int', unique: true })
    @Generated('increment')
    code: number;

    @Column({ type: 'varchar', length: 64 })
    name: string;

    @Column({ type: 'varchar', length: 200 })
    description: string;

    @ManyToMany(type => UserEntity, users => users.categories, { onDelete: 'CASCADE' })
    @JoinTable()
    users: UserEntity[];

    @CreateDateColumn()
    created: Date;

    @DeleteDateColumn()
    deleteAt?: Date;
}