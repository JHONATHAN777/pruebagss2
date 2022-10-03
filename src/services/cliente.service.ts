import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClienteService {
    constructor(
     
    ) { }

    async findAll(): Promise<Cliente[]> {
        

        return [{
            id: 1,
            cedula: 1026584007,
            nombre: "juan",
            numero1: 3015962798,
            numero2: 3214562538,
            
        }]
    }
}