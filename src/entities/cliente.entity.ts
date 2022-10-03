import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Alquiller } from './alquiller.entity';

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

    @OneToMany(type => Alquiller, Alquiller => Alquiller.id)
    alquilleres: Alquiller[];

}