import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from './../users/users.entity';

@Entity('facebook_accounts')
export class FacebookAccountEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column('string')
    facebook_id?: string;

    @OneToOne(type => UserEntity, { onDelete: 'CASCADE', cascade: true })
    @JoinColumn()
    user?: UserEntity;

    @CreateDateColumn()
    createdAt?: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}