import { ReportsEntity } from './../reports/reports.entity';
import { BlockUserEntity } from './../block-users/block_users.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, Generated } from "typeorm";

@Entity('report_types')
export class ReportTypesEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 64 })
    name: string;

    @OneToMany(type => BlockUserEntity, blockUser => blockUser.type)
    users: BlockUserEntity[];

    @OneToMany(type => ReportsEntity, report => report.type)
    reports: ReportsEntity[];

    @Column({ type: 'int', unique: true })
    @Generated('increment')
    code: number;

    @CreateDateColumn()
    created: Date;
}