import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alquiller {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    fecha: string;

    @Column('int')
    tiempo: number;

    @Column('int')
    valor_total: number;

    @Column('int')
    saldo: number;

    @Column('int')
    abono_inicial: number;

    @Column('int')
    devuelto: boolean;


}