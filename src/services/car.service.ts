import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, } from 'typeorm';
import { Car } from '../entities/car.entity';

@Injectable()
export class CarService {
    constructor(
        // @InjectRepository(Car)
        // private carRepository: Repository<Car>,
    ) { }

    async findAll(): Promise<Car[]> {
        //return this.carRepository.find();

        return [{
            id: 1,
            marca: "nizan",
            modelo: "nizan-tx50-2022",
            placa: "xhj777",
            disponible: true,
            
        }]
    }
}