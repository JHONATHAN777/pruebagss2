import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, } from 'typeorm';
import { Alquiller } from '../entities/alquiller.entity';

@Injectable()
export class AlquillerService {
    constructor(
        // @InjectRepository(Car)
        // private carRepository: Repository<Car>,
    ) { }

    async findAll(): Promise<Alquiller[]> {
        //return this.carRepository.find();

        return [{
            id: 1,
            fecha: 1,
            tiempo: 15,
            valor_total: 7000,
            saldo: 5000,
            abono_inicial:30 ,
            devuelto:true,
        }]
    }
}