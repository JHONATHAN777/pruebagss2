import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, } from 'typeorm';
import { Alquiller } from '../entities/alquiller.entity';

@Injectable()
export class AlquillerService {
    constructor(
        @InjectRepository(Alquiller)
        private alquilerRepository: Repository<Alquiller>,
    ) { }

    async findAll(): Promise<Alquiller[]> {
        return this.alquilerRepository.find();
    }
}