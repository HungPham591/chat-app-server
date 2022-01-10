import { UserEntity } from './../users/users.entity';
import { ReportTypesEntity } from './../report-types/report_types.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";

@Entity('reports')
export class ReportsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => ReportTypesEntity, reportType => reportType.reports)
    type: ReportTypesEntity;

    @ManyToOne(type => UserEntity, user => user.reports_send)
    user_send: UserEntity;

    @ManyToOne(type => UserEntity, user => user.reports_receive)
    user_receive: UserEntity;

    @CreateDateColumn()
    created: Date;
}