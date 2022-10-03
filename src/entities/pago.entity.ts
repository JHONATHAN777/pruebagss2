import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pago {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    fecha: string;

    @Column('int')
    valor: number;


}