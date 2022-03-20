import { Entity, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Student } from "./Student";
import { Teacher } from "./Teachers";

@Entity("disciplines")
export class Discipline extends BaseEntity{
    @Column()
    name: string;

    @Column()
    description: string;

    @Column({nullable: true})
    teacher_id: string;

    @ManyToOne(type => Teacher, teacher => teacher.disciplines, { nullable: true})
    @JoinColumn({ name: 'teacher_id' })
    teacher: Teacher;

    @Column({nullable: true})
    student_id: string;

    @OneToMany(type => Student, discipline => Discipline, { nullable: true})
    @JoinColumn({ name: 'student_id' })
    students: Student[];
}