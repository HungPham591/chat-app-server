import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from './../users/users.entity';

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

    @ManyToMany(type => UserEntity, users => users.category, { onDelete: 'CASCADE', cascade: true })
    @JoinTable()
    users: UserEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}