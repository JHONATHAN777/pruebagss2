import { Controller, Get, Post } from '@nestjs/common';
import { ClienteService } from 'src/services/cliente.service';

@Controller()
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) { }

  @Post()
  async create(): Promise<boolean> {
    return await this.clienteService.createCliente({
      id: 14,
      cedula: 1026584007,
      nombre: "juanito",
      numero1: 3015962798,
      numero2: 3204562538,
      alquilleres:[],
    });

    
  }
}
