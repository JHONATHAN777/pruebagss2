import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    marca: string;

    @Column('text')
    modelo: string;

    @Column()
    placa: string;

    @Column()
    disponible: boolean;


}