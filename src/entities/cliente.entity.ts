import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cedula: number;

    @Column('text')
    nombre: string;

    @Column('int')
    numero1: number;

    @Column('int')
    numero2: number;

}