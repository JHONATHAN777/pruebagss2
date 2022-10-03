import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, } from 'typeorm';
import { Pago } from '../entities/pago.entity';

@Injectable()
export class PagoService {
    constructor(
 
    ) { }

    async findAll(): Promise<Pago[]> {
        

        return [{
            id: 1,
            fecha: "25/07/1995",
            valor: 2,
        }]
    }
}