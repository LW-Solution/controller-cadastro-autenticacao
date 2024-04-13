import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, DeleteDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => User, user => user.permissions)
    users: User[];

    @DeleteDateColumn() 
    deletedAt: Date; 
}
