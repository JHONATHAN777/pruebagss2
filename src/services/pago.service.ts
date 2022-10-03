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
            fecha: 41,
            valor: 2,
            
        }]
    }
}