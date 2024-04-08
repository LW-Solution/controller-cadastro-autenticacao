import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Permission } from "./Permission";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    user_name: string;

    @Column({length: 225})
    password: string;

    @ManyToMany(() => Permission)
    @JoinTable()
    permissions: Permission[];
}