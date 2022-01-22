import { ReportTypesEntity } from './../report-types/report_types.entity';
import { UserEntity } from './../users/users.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";

@Entity('block_users')
export class BlockUserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(type => UserEntity)
    user: UserEntity;

    @ManyToOne(type => ReportTypesEntity, reportType => reportType.users)
    type: ReportTypesEntity;

    @CreateDateColumn()
    createdAt: Date;
}