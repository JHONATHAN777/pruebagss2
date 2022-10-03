import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Car } from './car.entity';
import { Cliente } from './cliente.entity';
import { Pago } from './pago.entity';

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

    @OneToMany(type => Car, Car => Car.id)
    cars: Car[];
   
    @OneToMany(type => Pago, Pago => Pago.id)
    pagos: Pago[];
 

}