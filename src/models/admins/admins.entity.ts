import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn } from "typeorm";

@Entity('admins')
export class AdminEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 100 })
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}