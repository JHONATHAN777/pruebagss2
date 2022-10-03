import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alquiller } from 'src/entities/alquiller.entity';
import { Repository, } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClienteService {
    constructor(
     @InjectRepository(Cliente)
     private clienteRepository: Repository<Cliente>,
    ) { }

    async createCliente(cliente : Cliente){   
     this.clienteRepository.create(cliente)
     return true;
    }
}