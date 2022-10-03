import { Controller, Get } from '@nestjs/common';
import { ClienteService } from 'src/services/cliente.service';

@Controller()
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) { }

  @Get()
  cliente() {
    return this.clienteService.findAll();
  }
}
